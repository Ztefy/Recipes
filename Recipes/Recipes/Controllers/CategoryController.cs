using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Recipes.Data;
using Recipes.Data.Entities;
using Recipes.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Controllers
{
    [Route("api/[Controller]")]
    public class CategoryController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<CategoryController> _logger;

        public CategoryController(IRecipeRepository repository, ILogger<CategoryController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllCategories());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get categories: {ex}");
                return BadRequest("Failed to get categories");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var category = _repository.GetCategoryById(id);

                if (category != null) return Ok(category);
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get category: {ex}");
                return BadRequest("Failed to get category");
            }
        }

         [HttpPost]
        public IActionResult Post ([FromBody]CategoryViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newCategory = new Category()
                    {
                        CategoryId = model.CategoryId,
                        Name = model.CategoryName
                    };

                    _repository.AddEntity(newCategory);
                    if (_repository.SaveAll())
                    {
                        var vm = new CategoryViewModel()
                        {
                            CategoryId = newCategory.CategoryId,
                            CategoryName = newCategory.Name
                        };

                        return Created($"/api/category/{vm.CategoryId}", vm);
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new category: {ex}");
            }

            return BadRequest("Failed to save new category");
        }
    }
}

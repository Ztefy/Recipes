using AutoMapper;
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
        private readonly IMapper _mapper;

        public CategoryController(IRecipeRepository repository,
            ILogger<CategoryController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Category>,IEnumerable<CategoryViewModel>>(_repository.GetAllCategories()));
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

                if (category != null) return Ok(_mapper.Map<Category, CategoryViewModel>(category));
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
                    var newCategory = _mapper.Map<CategoryViewModel, Category>(model);

                    _repository.AddEntity(newCategory);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/category/{newCategory.CategoryId}", _mapper.Map<Category,CategoryViewModel>(newCategory));
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

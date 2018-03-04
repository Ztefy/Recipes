using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Recipes.Data;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Categories.Controllers
{
    [Route("api/[Controller]")]
    public class CategoriesController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<CategoriesController> _logger;

        public CategoriesController(IRecipeRepository repository,
            ILogger<CategoriesController> logger)
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
                throw;
            }
        }
    }
}

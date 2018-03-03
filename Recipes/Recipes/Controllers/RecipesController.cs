using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Recipes.Data;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Controllers
{
    [Route("api/[Controller]")]
    public class RecipesController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<RecipesController> _logger;

        public RecipesController(IRecipeRepository repository,
            ILogger<RecipesController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllRecipes());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get recipes: {ex}");
                return BadRequest("Failed to get recipes");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var recipe = _repository.GetRecipeById(id);

                if (recipe != null) return Ok(recipe);
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get recipe: {ex}");
                return BadRequest("Failed to get recipe");
            }
        }
    }
}

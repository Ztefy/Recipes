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
    public class RecipeController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<RecipeController> _logger;
        private readonly IMapper _mapper;

        public RecipeController(IRecipeRepository repository,
            ILogger<RecipeController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Recipe>, IEnumerable<RecipeViewModel>>(_repository.GetAllRecipes()));
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

                if (recipe != null)
                    return Ok(_mapper.Map<Recipe, RecipeViewModel>(recipe));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get recipe: {ex}");
                return BadRequest("Failed to get recipe");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]RecipeViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newRecipe = _mapper.Map<RecipeViewModel, Recipe>(model);

                    _repository.AddEntity(newRecipe);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/recipe/{newRecipe.RecipeId}", _mapper.Map<Recipe, RecipeViewModel>(newRecipe));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new recipe: {ex}");
            }

            return BadRequest("Failed to save new recipe");
        }
    }
}

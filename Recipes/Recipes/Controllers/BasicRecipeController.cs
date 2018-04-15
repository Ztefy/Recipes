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
    public class BasicRecipeController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<BasicRecipeController> _logger;
        private readonly IMapper _mapper;

        public BasicRecipeController(IRecipeRepository repository,
            ILogger<BasicRecipeController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Recipe>, IEnumerable<BasicRecipeViewModel>>(_repository.GetAllBasicRecipes()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get basic recipes: {ex}");
                return BadRequest("Failed to get basic recipes");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var recipe = _repository.GetBasicRecipeById(id);

                if (recipe != null)
                    return Ok(_mapper.Map<Recipe, BasicRecipeViewModel>(recipe));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get basic recipe: {ex}");
                return BadRequest("Failed to get basic recipe");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]BasicRecipeViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newRecipe = _mapper.Map<BasicRecipeViewModel, Recipe>(model);

                    _repository.AddBasicRecipe(newRecipe);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/basicrecipe/{newRecipe.RecipeId}", _mapper.Map<Recipe, BasicRecipeViewModel>(newRecipe));
                    }
                }
                else
                {

                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new basic recipe: {ex}");
            }

            return BadRequest("Failed to save new basic recipe");
        }
    }
}

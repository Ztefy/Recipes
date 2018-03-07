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
    public class IngredientController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<IngredientController> _logger;
        private readonly IMapper _mapper;

        public IngredientController(IRecipeRepository repository,
            ILogger<IngredientController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Ingredient>, IEnumerable<IngredientViewModel>>(_repository.GetAllIngredients()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredients: {ex}");
                return BadRequest("Failed to get ingredients");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var ingredient = _repository.GetIngredientById(id);

                if (ingredient != null) return Ok(_mapper.Map<Ingredient, IngredientViewModel>(ingredient));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient: {ex}");
                return BadRequest("Failed to get ingredient");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]IngredientViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newIngredient = _mapper.Map<IngredientViewModel, Ingredient>(model);

                    _repository.AddEntity(newIngredient);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/ingredient/{newIngredient.IngredientId}", _mapper.Map<Ingredient, IngredientViewModel>(newIngredient));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new ingredient: {ex}");
            }

            return BadRequest("Failed to save new ingredient");
        }
    }
}

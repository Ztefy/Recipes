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
    public class IngredientPreparationController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<IngredientPreparationController> _logger;
        private readonly IMapper _mapper;

        public IngredientPreparationController(IRecipeRepository repository,
            ILogger<IngredientPreparationController> logger,
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
                return Ok(_mapper.Map<IEnumerable<IngredientPreparation>, IEnumerable<IngredientPreparationViewModel>>(_repository.GetAllIngredientPreprations()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient preparations: {ex}");
                return BadRequest("Failed to get ingredient preparations");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var ingredientPreparation = _repository.GetIngredientPreparationById(id);

                if (ingredientPreparation != null) return Ok(_mapper.Map<IngredientPreparation, IngredientPreparationViewModel>(ingredientPreparation));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient preparation: {ex}");
                return BadRequest("Failed to get ingredient preparation");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]IngredientPreparationViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newIngredientPreparation = _mapper.Map<IngredientPreparationViewModel, IngredientPreparation>(model);

                    _repository.AddEntity(newIngredientPreparation);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/ingredientpreparation/{newIngredientPreparation.IngPrepId}", _mapper.Map<IngredientPreparation, IngredientPreparationViewModel>(newIngredientPreparation));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new ingredient preparation: {ex}");
            }

            return BadRequest("Failed to save new ingredient preparation");
        }
    }
}

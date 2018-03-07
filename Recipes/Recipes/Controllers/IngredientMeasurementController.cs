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
    public class IngredientMeasurementController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<IngredientMeasurementController> _logger;
        private readonly IMapper _mapper;

        public IngredientMeasurementController(IRecipeRepository repository,
            ILogger<IngredientMeasurementController> logger,
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
                return Ok(_mapper.Map<IEnumerable<IngredientMeasurement>, IEnumerable<IngredientMeasurementViewModel>>(_repository.GetAllIngredientMeasurements()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient measurements: {ex}");
                return BadRequest("Failed to get ingredient measurements");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var ingredientMeasurement = _repository.GetIngredientMeasurementById(id);

                if (ingredientMeasurement != null) return Ok(_mapper.Map<IngredientMeasurement, IngredientMeasurementViewModel>(ingredientMeasurement));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient measurement: {ex}");
                return BadRequest("Failed to get ingredient measurement");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]IngredientMeasurementViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newIngredientMeasurement = _mapper.Map<IngredientMeasurementViewModel, IngredientMeasurement>(model);

                    _repository.AddEntity(newIngredientMeasurement);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/ingredientmeasurement/{newIngredientMeasurement.IngrMeasId}", _mapper.Map<IngredientMeasurement, IngredientMeasurementViewModel>(newIngredientMeasurement));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new ingredient measurement: {ex}");
            }

            return BadRequest("Failed to save new ingredient measurement");
        }
    }
}

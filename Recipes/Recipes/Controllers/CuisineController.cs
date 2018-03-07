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
    public class CuisineController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<CuisineController> _logger;
        private readonly IMapper _mapper;

        public CuisineController(IRecipeRepository repository,
            ILogger<CuisineController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Cuisine>, IEnumerable<CuisineViewModel>>(_repository.GetAllCuisines()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get cuisines: {ex}");
                return BadRequest("Failed to get cuisines");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var cuisine = _repository.GetCuisineById(id);

                if (cuisine != null) return Ok(_mapper.Map<Cuisine, CuisineViewModel>(cuisine));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get cuisine: {ex}");
                return BadRequest("Failed to get cuisine");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]CuisineViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newCuisine = _mapper.Map<CuisineViewModel, Cuisine>(model);

                    _repository.AddEntity(newCuisine);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/cuisine/{newCuisine.CuisineId}", _mapper.Map<Cuisine, CuisineViewModel>(newCuisine));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new cuisine: {ex}");
            }

            return BadRequest("Failed to save new cuisine");
        }
    }
}

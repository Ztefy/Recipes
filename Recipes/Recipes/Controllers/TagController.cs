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
    public class TagController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<TagController> _logger;
        private readonly IMapper _mapper;

        public TagController(IRecipeRepository repository,
            ILogger<TagController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Tag>, IEnumerable<TagViewModel>>(_repository.GetAllTags()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get tags: {ex}");
                return BadRequest("Failed to get tags");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var tag = _repository.GetTagById(id);

                if (tag != null) return Ok(_mapper.Map<Tag, TagViewModel>(tag));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get tag: {ex}");
                return BadRequest("Failed to get tag");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]TagViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newTag = _mapper.Map<TagViewModel, Tag>(model);

                    _repository.AddEntity(newTag);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/tag/{newTag.TagId}", _mapper.Map<Tag, TagViewModel>(newTag));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new tag: {ex}");
            }

            return BadRequest("Failed to save new tag");
        }
    }
}

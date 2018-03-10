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
    public class SkillController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<SkillController> _logger;
        private readonly IMapper _mapper;

        public SkillController(IRecipeRepository repository,
            ILogger<SkillController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Skill>, IEnumerable<SkillViewModel>>(_repository.GetAllSkills()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get skills: {ex}");
                return BadRequest("Failed to get skills");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var skill = _repository.GetSkillById(id);

                if (skill != null) return Ok(_mapper.Map<Skill, SkillViewModel>(skill));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get skill: {ex}");
                return BadRequest("Failed to get skill");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]SkillViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newSkill = _mapper.Map<SkillViewModel, Skill>(model);

                    _repository.AddEntity(newSkill);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/skill/{newSkill.SkillId}", _mapper.Map<Skill, SkillViewModel>(newSkill));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new skill: {ex}");
            }

            return BadRequest("Failed to save new skill");
        }

    }
}

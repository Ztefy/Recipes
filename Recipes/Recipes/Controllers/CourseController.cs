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
    public class CourseController : Controller
    {
        private readonly IRecipeRepository _repository;
        private readonly ILogger<CourseController> _logger;
        private readonly IMapper _mapper;

        public CourseController(IRecipeRepository repository,
            ILogger<CourseController> logger,
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
                return Ok(_mapper.Map<IEnumerable<Course>, IEnumerable<CourseViewModel>>(_repository.GetAllCourses()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get courses: {ex}");
                return BadRequest("Failed to get courses");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var course = _repository.GetCourseById(id);

                if (course != null) return Ok(_mapper.Map<Course, CourseViewModel>(course));
                else return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get course: {ex}");
                return BadRequest("Failed to get course");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]CourseViewModel model)
        {
            // add it to the db
            try
            {
                if (ModelState.IsValid)
                {
                    var newCourse = _mapper.Map<CourseViewModel, Course>(model);

                    _repository.AddEntity(newCourse);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/course/{newCourse.CourseId}", _mapper.Map<Course, CourseViewModel>(newCourse));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save a new course: {ex}");
            }

            return BadRequest("Failed to save new course");
        }
    }
}

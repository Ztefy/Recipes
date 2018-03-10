using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly RecipeContext _ctx;
        private readonly ILogger<RecipeRepository> _logger;

        public RecipeRepository(RecipeContext ctx,
            ILogger<RecipeRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            try
            {
                _logger.LogInformation("GetAllCategories was called");

                return _ctx.Category
                    .OrderBy(c => c.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get categories: {ex}");
                return null;
            }
        }

        public Category GetCategoryById(int id)
        {
            try
            {
                _logger.LogInformation("GetCategoryById was called");

                return _ctx.Category
                    .Where(c => c.CategoryId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get category: {ex}");
                return null;
            }
        }

        public IEnumerable<Course> GetAllCourses()
        {
            try
            {
                _logger.LogInformation("GetAllCourses was called");

                return _ctx.Course
                    .OrderBy(c => c.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get courses: {ex}");
                return null;
            }
        }

        public Course GetCourseById(int id)
        {
            try
            {
                _logger.LogInformation("GetCourseById was called");

                return _ctx.Course
                    .Where(c => c.CourseId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get course: {ex}");
                return null;
            }
        }

        public IEnumerable<Cuisine> GetAllCuisines()
        {
            try
            {
                _logger.LogInformation("GetAllCuisines was called");

                return _ctx.Cuisine
                    .OrderBy(c => c.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get cuisines: {ex}");
                return null;
            }
        }

        public Cuisine GetCuisineById(int id)
        {
            try
            {
                _logger.LogInformation("GetCuisineById was called");

                return _ctx.Cuisine
                    .Where(c => c.CuisineId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get cuisine: {ex}");
                return null;
            }
        }

        public IEnumerable<Ingredient> GetAllIngredients()
        {
            try
            {
                _logger.LogInformation("GetAllIngredients was called");

                return _ctx.Ingredient
                    .OrderBy(i => i.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredients: {ex}");
                return null;
            }
        }

        public Ingredient GetIngredientById(int id)
        {
            try
            {
                _logger.LogInformation("GetIngredientById was called");

                return _ctx.Ingredient
                    .Where(i => i.IngredientId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient: {ex}");
                return null;
            }
        }

        public IEnumerable<IngredientMeasurement> GetAllIngredientMeasurements()
        {
            try
            {
                _logger.LogInformation("GetAllIngredientMeasurements was called");

                return _ctx.IngredientMeasurement
                    .OrderBy(i => i.Measurement)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient measurements: {ex}");
                return null;
            }
        }

        public IngredientMeasurement GetIngredientMeasurementById(int id)
        {
            try
            {
                _logger.LogInformation("GetIngredientMeasurementById was called");

                return _ctx.IngredientMeasurement
                    .Where(i => i.IngrMeasId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get ingredient measurement: {ex}");
                return null;
            }
        }

        public IEnumerable<Skill> GetAllSkills()
        {
            try
            {
                _logger.LogInformation("GetAllSkills was called");

                return _ctx.Skill
                    .OrderBy(s => s.SkillLevel)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get skills: {ex}");
                return null;
            }
        }

        public Skill GetSkillById(int id)
        {
            try
            {
                _logger.LogInformation("GetSkillById was called");

                return _ctx.Skill
                    .Where(s => s.SkillId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get skill: {ex}");
                return null;
            }
        }

        public IEnumerable<Tag> GetAllTags()
        {
            try
            {
                _logger.LogInformation("GetAllTags was called");

                return _ctx.Tag
                    .OrderBy(t => t.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get tags: {ex}");
                return null;
            }
        }

        public Tag GetTagById(int id)
        {
            try
            {
                _logger.LogInformation("GetTagById was called");

                return _ctx.Tag
                    .Where(t => t.TagId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get tag: {ex}");
                return null;
            }
        }
    }
}

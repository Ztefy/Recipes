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
    }
}

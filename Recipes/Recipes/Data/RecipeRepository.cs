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

        public IEnumerable<Recipe> GetAllRecipes()
        {
            try
            {
                _logger.LogInformation("GetAllRecipes was called");

                return _ctx.Recipes
                    .Include(r => r.Category)
                    .Include(r => r.Nutrition).ThenInclude(n => n.Type)
                    .Include(r => r.Nutrition).ThenInclude(n => n.Measurement)
                    .Include(r => r.Skill)
                    .OrderBy(r => r.RecipeName)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all recipes: {ex}");
                return null;
            }

        }

        public Recipe GetRecipeById(int id)
        {
            return _ctx.Recipes
                .Include(r => r.Category)
                .Include(r => r.Course)
                .Include(r => r.Cuisine).ThenInclude(c => c.Cuisine)
                .Include(r => r.Ingredients).ThenInclude(i => i.Ingredient)
                .Include(r => r.Ingredients).ThenInclude(i => i.Measurement)
                .Include(r => r.Ingredients).ThenInclude(i => i.Preparation)
                .Include(r => r.Methods)
                .Include(r => r.Notes)
                .Include(r => r.Nutrition).ThenInclude(n => n.Type)
                .Include(r => r.Nutrition).ThenInclude(n => n.Measurement)
                .Include(r => r.Skill)
                .Include(r => r.Tags).ThenInclude(t => t.Tag)
                .Include(r => r.Timings).ThenInclude(t => t.Type)
                .Include(r => r.Timings).ThenInclude(t => t.Measurement)
                .Where(r => r.RecipeId == id)
                .FirstOrDefault();
        }

        public IEnumerable<Recipe> GetRecipesByCategory(string category)
        {
            return _ctx.Recipes
                .Where(r => r.Category.Name == category)
                .ToList();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}

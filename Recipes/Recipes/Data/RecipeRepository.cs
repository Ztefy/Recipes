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

        public RecipeRepository(RecipeContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Recipe> GetAllRecipes()
        {
            return _ctx.Recipes
                .OrderBy(r => r.RecipeName)
                .ToList();
        }

        public IEnumerable<Recipe> GetProductsByCategory(string category)
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

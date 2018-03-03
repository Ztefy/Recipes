using System.Collections.Generic;
using Recipes.Data.Entities;

namespace Recipes.Data
{
    public interface IRecipeRepository
    {
        IEnumerable<Recipe> GetAllRecipes();
        IEnumerable<Recipe> GetProductsByCategory(string category);
        bool SaveAll();
    }

}
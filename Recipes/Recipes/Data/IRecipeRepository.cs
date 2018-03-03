using System.Collections.Generic;
using Recipes.Data.Entities;

namespace Recipes.Data
{
    public interface IRecipeRepository
    {
        IEnumerable<Recipe> GetAllRecipes();
        IEnumerable<Recipe> GetRecipesByCategory(string category);
        Recipe GetRecipeById(int id);

        bool SaveAll();
    }

}
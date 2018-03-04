using System.Collections.Generic;
using Recipes.Data.Entities;

namespace Recipes.Data
{
    public interface IRecipeRepository
    {
        IEnumerable<Category> GetAllCategories();
        IEnumerable<Category> GetCategoryById(int id);

        bool SaveAll();
    }

}
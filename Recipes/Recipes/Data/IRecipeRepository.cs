using System.Collections.Generic;
using Recipes.Data.Entities;

namespace Recipes.Data
{
    public interface IRecipeRepository
    {
        IEnumerable<Category> GetAllCategories();
        Category GetCategoryById(int id);

        IEnumerable<Course> GetAllCourses();
        Course GetCourseById(int id);

        IEnumerable<Cuisine> GetAllCuisines();
        Cuisine GetCuisineById(int id);

        IEnumerable<Ingredient> GetAllIngredients();
        Ingredient GetIngredientById(int id);

        IEnumerable<IngredientMeasurement> GetAllIngredientMeasurements();
        IngredientMeasurement GetIngredientMeasurementById(int id);

        IEnumerable<IngredientPreparation> GetAllIngredientPreprations();
        IngredientPreparation GetIngredientPreparationById(int id);

        IEnumerable<Skill> GetAllSkills();
        Skill GetSkillById(int id);

        IEnumerable<Tag> GetAllTags();
        Tag GetTagById(int id);

        bool SaveAll();
        void AddEntity(object model);
    }

}
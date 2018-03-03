using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data
{
    public class RecipeSeeder
    {
        private readonly RecipeContext _ctx;
        public IHostingEnvironment _hosting;

        public RecipeSeeder(RecipeContext ctx,
            IHostingEnvironment hosting)
        {
            _ctx = ctx;
            _hosting = hosting;
        }

        public void Seed()
        {
            _ctx.Database.EnsureCreated();

            if (!_ctx.Category.Any())
            {
                // Need to create sample category data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/category.json");
                var json = File.ReadAllText(filepath);
                var category = JsonConvert.DeserializeObject<IEnumerable<Category>>(json);
                _ctx.Category.AddRange(category);

                _ctx.SaveChanges();
            }

            if (!_ctx.Course.Any())
            {
                // Need to create sample course data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/course.json");
                var json = File.ReadAllText(filepath);
                var course = JsonConvert.DeserializeObject<IEnumerable<Course>>(json);
                _ctx.Course.AddRange(course);

                _ctx.SaveChanges();
            }

            if (!_ctx.Cuisine.Any())
            {
                // Need to create sample cuisine data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/cuisine.json");
                var json = File.ReadAllText(filepath);
                var cuisine = JsonConvert.DeserializeObject<IEnumerable<Cuisine>>(json);
                _ctx.Cuisine.AddRange(cuisine);

                _ctx.SaveChanges();
            }

            if (!_ctx.Ingredient.Any())
            {
                // Need to create sample ingredient data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/ingredient.json");
                var json = File.ReadAllText(filepath);
                var ingredient = JsonConvert.DeserializeObject<IEnumerable<Ingredient>>(json);
                _ctx.Ingredient.AddRange(ingredient);

                _ctx.SaveChanges();
            }

            if (!_ctx.IngredientMeasurement.Any())
            {
                // Need to create sample ingredient measurements data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/ingredientmeasurement.json");
                var json = File.ReadAllText(filepath);
                var ingredientmeasurement = JsonConvert.DeserializeObject<IEnumerable<IngredientMeasurement>>(json);
                _ctx.IngredientMeasurement.AddRange(ingredientmeasurement);

                _ctx.SaveChanges();
            }

            if (!_ctx.IngredientPreparation.Any())
            {
                // Need to create sample ingredient preparation data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/ingredientpreparation.json");
                var json = File.ReadAllText(filepath);
                var ingredientpreparation = JsonConvert.DeserializeObject<IEnumerable<IngredientPreparation>>(json);
                _ctx.IngredientPreparation.AddRange(ingredientpreparation);

                _ctx.SaveChanges();
            }

            if (!_ctx.Nutrition.Any())
            {
                // Need to create sample nutrition data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/nutrition.json");
                var json = File.ReadAllText(filepath);
                var nutrition = JsonConvert.DeserializeObject<IEnumerable<Nutrition>>(json);
                _ctx.Nutrition.AddRange(nutrition);

                _ctx.SaveChanges();
            }

            if (!_ctx.NutritionMeasurement.Any())
            {
                // Need to create sample nutrition measurements data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/nutritionmeasurement.json");
                var json = File.ReadAllText(filepath);
                var nutritionmeasurement = JsonConvert.DeserializeObject<IEnumerable<NutritionMeasurement>>(json);
                _ctx.NutritionMeasurement.AddRange(nutritionmeasurement);

                _ctx.SaveChanges();
            }

            if (!_ctx.Skill.Any())
            {
                // Need to create sample skill data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/skill.json");
                var json = File.ReadAllText(filepath);
                var skill = JsonConvert.DeserializeObject<IEnumerable<Skill>>(json);
                _ctx.Skill.AddRange(skill);

                _ctx.SaveChanges();
            }

            if (!_ctx.Tag.Any())
            {
                // Need to create sample tag data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/tag.json");
                var json = File.ReadAllText(filepath);
                var tag = JsonConvert.DeserializeObject<IEnumerable<Tag>>(json);
                _ctx.Tag.AddRange(tag);

                _ctx.SaveChanges();
            }

            if (!_ctx.TimingMeasurement.Any())
            {
                // Need to create sample timing measurements data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/timingmeasurement.json");
                var json = File.ReadAllText(filepath);
                var timingmeasurement = JsonConvert.DeserializeObject<IEnumerable<TimingMeasurement>>(json);
                _ctx.TimingMeasurement.AddRange(timingmeasurement);

                _ctx.SaveChanges();
            }

            if (!_ctx.TimingType.Any())
            {
                // Need to create sample timing types data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/timingtype.json");
                var json = File.ReadAllText(filepath);
                var timingtype = JsonConvert.DeserializeObject<IEnumerable<TimingType>>(json);
                _ctx.TimingType.AddRange(timingtype);

                _ctx.SaveChanges();
            }

            if (!_ctx.Recipes.Any())
            {
                // Need to create sample recipe data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/recipes.json");
                var json = File.ReadAllText(filepath);
                var recipe = JsonConvert.DeserializeObject<IEnumerable<Recipe>>(json);
                _ctx.Recipes.AddRange(recipe);

                _ctx.SaveChanges();
            }

            if (!_ctx.RecipeIngredient.Any())
            {
                // Need to create sample recipe ingredients data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/recipeingredient.json");
                var json = File.ReadAllText(filepath);
                var recipeingredient = JsonConvert.DeserializeObject<IEnumerable<RecipeIngredient>>(json);
                _ctx.RecipeIngredient.AddRange(recipeingredient);

                _ctx.SaveChanges();
            }

            if (!_ctx.RecipeMethod.Any())
            {
                // Need to create sample recipe methods data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/recipemethod.json");
                var json = File.ReadAllText(filepath);
                var recipemethod = JsonConvert.DeserializeObject<IEnumerable<RecipeMethod>>(json);
                _ctx.RecipeMethod.AddRange(recipemethod);

                _ctx.SaveChanges();
            }

            if (!_ctx.RecipeNutrition.Any())
            {
                // Need to create sample recipe nutrition data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/recipenutrition.json");
                var json = File.ReadAllText(filepath);
                var receipenutrition = JsonConvert.DeserializeObject<IEnumerable<RecipeNutrition>>(json);
                _ctx.RecipeNutrition.AddRange(receipenutrition);

                _ctx.SaveChanges();
            }

            if (!_ctx.RecipeTimings.Any())
            {
                // Need to create sample recipe timings data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/Seeders/recipetimings.json");
                var json = File.ReadAllText(filepath);
                var recipetimings = JsonConvert.DeserializeObject<IEnumerable<RecipeTimings>>(json);
                _ctx.RecipeTimings.AddRange(recipetimings);

                _ctx.SaveChanges();
            }

        }
    }
}

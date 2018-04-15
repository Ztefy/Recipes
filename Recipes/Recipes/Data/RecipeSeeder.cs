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
        private readonly IRecipeRepository _repository;

        public RecipeSeeder(RecipeContext ctx,
            IHostingEnvironment hosting,
            IRecipeRepository repository)
        {
            _ctx = ctx;
            _hosting = hosting;
            _repository = repository;
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

            if (!_ctx.Recipes.Any())
            {
                // Need to create sample recipe data
                var skill = _repository.GetAllSkills();
                var course = _repository.GetAllCourses();
                var category = _repository.GetAllCategories();
                var ingredient = _repository.GetAllIngredients();
                var ingredientmeasurement = _repository.GetAllIngredientMeasurements();
                var ingredientpreparation = _repository.GetAllIngredientPreprations();
                var cuisine = _repository.GetAllCuisines();
                var tag = _repository.GetAllTags();

                var recipe = new Recipe()
                {
                    RecipeName = "Test Recipe",
                    RecipeImage = "",
                    Portions = 4,
                    Rating = 3,
                    PrepTime = "10 mins",
                    CookTime = "40 mins",
                    Calories = 450,
                    Fat = 10,
                    Saturated = 2,
                    Carbohydrates = 15,
                    Sugars = 2,
                    Fibre = 3,
                    Protein = 15,
                    Salt = 1,
                    Location = "Book 1",

                    Skill = skill.First(),
                    Course = course.First(),
                    Category = category.First(),

                    Ingredients = new List<RecipeIngredient>()
                    {
                        new RecipeIngredient()
                        {
                            Ingredient = ingredient.First(),
                            Quantity = 400,
                            Measurement = ingredientmeasurement.First(),
                            Preparation = ingredientpreparation.First()
                        },
                        new RecipeIngredient()
                        {
                            Ingredient = ingredient.First(),
                            Quantity = 50,
                            Measurement = ingredientmeasurement.First(),
                            Preparation = ingredientpreparation.First()
                        },
                        new RecipeIngredient()
                        {
                            Ingredient = ingredient.First(),
                            Quantity = 150,
                            Measurement = ingredientmeasurement.First(),
                            Preparation = ingredientpreparation.First()
                        },
                        new RecipeIngredient()
                        {
                            Ingredient = ingredient.First(),
                            Quantity = 2,
                            Measurement = ingredientmeasurement.First(),
                            Preparation = ingredientpreparation.First()
                        },
                        new RecipeIngredient()
                        {
                            Ingredient = ingredient.First(),
                            Quantity = 34,
                            Measurement = ingredientmeasurement.First(),
                            Preparation = ingredientpreparation.First()
                        }
},

                    Methods = new List<RecipeMethod>()
                    {
                        new RecipeMethod()
                        {
                            StepNumber = 1,
                            Method = "1st steps to do."
                        },
                        new RecipeMethod()
                        {
                            StepNumber = 2,
                            Method = "2nd steps to do."
                        },
                        new RecipeMethod()
                        {
                            StepNumber = 3,
                            Method = "3rd steps to do."
                        }
                    },

                    Notes = new List<RecipeNote>()
                    {
                        new RecipeNote()
                        {
                            Note = "1st note on recipe."
                        },
                        new RecipeNote()
                        {
                            Note = "2nd note on recipe"
                        }
                    },

                    Cuisine = new List<RecipeCuisine>()
                    {
                        new RecipeCuisine()
                        {
                            Cuisine = cuisine.First()
                        }
                    },

                    Tags = new List<RecipeTags>()
                    {
                        new RecipeTags()
                        {
                            Tag = tag.First()
                        }
                    }
                };

                _ctx.Recipes.Add(recipe);

                _ctx.SaveChanges();
            }
        }
    }
}

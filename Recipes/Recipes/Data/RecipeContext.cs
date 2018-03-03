using Microsoft.EntityFrameworkCore;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions<RecipeContext> options): base(options)
        {
        }

        public DbSet<Category> Category { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Cuisine> Cuisine { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
        public DbSet<IngredientMeasurement> IngredientMeasurement { get; set; }
        public DbSet<IngredientPreparation> IngredientPreparation { get; set; }
        public DbSet<Nutrition> Nutrition { get; set; }
        public DbSet<NutritionMeasurement> NutritionMeasurement { get; set; }
        public DbSet<Skill> Skill { get; set; }
        public DbSet<Tag> Tag { get; set; }
        public DbSet<TimingMeasurement> TimingMeasurement { get; set; }
        public DbSet<TimingType> TimingType { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredient { get; set; }
        public DbSet<RecipeMethod> RecipeMethod { get; set; }
        public DbSet<RecipeNutrition> RecipeNutrition { get; set; }
        public DbSet<RecipeTimings> RecipeTimings { get; set; }
    }
}

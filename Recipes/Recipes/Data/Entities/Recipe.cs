using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string RecipeName { get; set; }
        public RecipeImage RecipeImage { get; set; }
        public int Portions { get; set; }
        public RecipeSkill Skill { get; set; }
        public ICollection<RecipeTimings> Timings { get; set; }
        public ICollection<RecipeNutrition> Nutrition { get; set; }
        public ICollection<RecipeIngredient> Ingredients { get; set; }
        public ICollection<RecipeMethod> Methods { get; set; }
        public ICollection<RecipeNote> Notes { get; set; }
        public ICollection<RecipeCourse> Couse { get; set; }
        public ICollection<RecipeCuisine> Cuisine { get; set; }
        public ICollection<RecipeCategory> Category { get; set; }
        public ICollection<RecipeTags> Tags { get; set; }
    }
}

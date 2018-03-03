using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }
        public string RecipeName { get; set; }
        public string RecipeImage { get; set; }
        public int Portions { get; set; }
        public int Rating { get; set; }
        public ICollection<RecipeTimings> Timings { get; set; }
        public ICollection<RecipeNutrition> Nutrition { get; set; }
        public ICollection<RecipeIngredient> Ingredients { get; set; }
        public ICollection<RecipeMethod> Methods { get; set; }
        public ICollection<RecipeNote> Notes { get; set; }
        public ICollection<RecipeCuisine> Cuisine { get; set; }
        public ICollection<RecipeTags> Tags { get; set; }
        public int SkillId { get; set; }
        public Skill Skill { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}

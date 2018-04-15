using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class BasicRecipeViewModel
    {
        public int RecipeId { get; set; }
        [Required]
        [MinLength(4)]
        public string RecipeName { get; set; }
        public string RecipeImage { get; set; }
        [Range(1, int.MaxValue)]
        public int Portions { get; set; }
        [Range(1, int.MaxValue)]
        public int Rating { get; set; }
        [MinLength(3)]
        public string PrepTime { get; set; }
        [MinLength(3)]
        public string CookTime { get; set; }
        [MinLength(3)]
        public string Location { get; set; }
        public int? Calories { get; set; }
        public int? Fat { get; set; }
        public int? Saturated { get; set; }
        public int? Carbohydrates { get; set; }
        public int? Sugars { get; set; }
        public int? Fibre { get; set; }
        public int? Protein { get; set; }
        public int? Salt { get; set; }
        [Required]
        public int SkillId { get; set; }
        public string skillSkillLevel { get; set; }
        [Required]
        public int CourseId { get; set; }
        public string courseName { get; set; }
        [Required]
        public int CategoryId { get; set; }
        public string categoryName { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class RecipeMethodViewModel
    {
        public int Id { get; set; }
        [Range(1, int.MaxValue)]
        public int StepNumber { get; set; }
        [Required]
        [MinLength(5)]
        public string Method { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class IngredientMeasurementViewModel
    {
        public int IngredientMeasurementId { get; set; }
        [Required]
        [MinLength(1)]
        public string IngredientMeasurement { get; set; }
    }
}

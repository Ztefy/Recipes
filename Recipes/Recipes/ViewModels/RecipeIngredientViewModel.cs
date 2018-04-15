using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class RecipeIngredientViewModel
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        [Required]
        public int IngredientId { get; set; }
        public string ingredientName { get; set; }

        [Required]
        public int MeasurementId { get; set; }
        public string measurementMeasurement { get; set; }

        [Required]
        public int PreparationId { get; set; }
        public string preparationPreparation { get; set; }
    }
}

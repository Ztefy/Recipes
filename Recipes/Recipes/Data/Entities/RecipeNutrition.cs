using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeNutrition
    {
        [Key]
        public int Id { get; set; }
        public Nutrition Type { get; set; }
        public string Quantity { get; set; }
        public int NutrMeasId { get; set; }
        public NutritionMeasurement Measurement { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }
        public Ingredient Ingredient { get; set; }
        public int? Quantity { get; set; }
        public int? IngrMeasId { get; set; }
        public IngredientMeasurement Measurement { get; set; }
        public int? IngPrepId { get; set; }
        public IngredientPreparation Preparation { get; set; }
        public Recipe Recipe { get; set; }
    }
}

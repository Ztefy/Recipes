using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class IngredientMeasurement
    {
        [Key]
        public int IngrMeasId { get; set; }
        public string Measurement { get; set; }
    }
}

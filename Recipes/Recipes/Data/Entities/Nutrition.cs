using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class Nutrition
    {
        [Key]
        public int NutritionId { get; set; }
        public string Type { get; set; }
    }
}

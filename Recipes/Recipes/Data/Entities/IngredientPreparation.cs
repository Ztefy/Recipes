using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class IngredientPreparation
    {
        [Key]
        public int IngPrepId { get; set; }
        public string Preparation { get; set; }
    }
}

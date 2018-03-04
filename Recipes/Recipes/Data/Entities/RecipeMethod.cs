using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeMethod
    {
        [Key]
        public int Id { get; set; }
        public int StepNumber { get; set; }
        public string Method { get; set; }
        public Recipe Recipe { get; set; }
    }
}

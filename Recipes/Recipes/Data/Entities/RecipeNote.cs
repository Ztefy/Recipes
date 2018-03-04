using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeNote
    {
        [Key]
        public int Id { get; set; }
        public string Note { get; set; }
        public Recipe Recipe { get; set; }
    }
}

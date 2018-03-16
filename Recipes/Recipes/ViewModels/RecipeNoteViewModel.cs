using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class RecipeNoteViewModel
    {
        public int Id { get; set; }
        [Required]
        [MinLength(5)]
        public string Note { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class RecipeTagViewModel
    {
        public int Id { get; set; }
        [Range(1, int.MaxValue)]
        public int TagId { get; set; }
        public string tagName { get; set; }
    }
}

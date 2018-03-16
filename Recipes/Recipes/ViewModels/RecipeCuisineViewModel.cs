using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class RecipeCuisineViewModel
    {
        public int Id { get; set; }
        [Required]
        public int CuisineId { get; set; }
        public string cuisineName { get; set; }
    }
}

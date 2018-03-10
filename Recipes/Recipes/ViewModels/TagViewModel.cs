using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class TagViewModel
    {
        public int TagId { get; set; }
        [Required]
        [MinLength(3)]
        public string Tag { get; set; }
    }
}

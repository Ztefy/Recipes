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
        public string TagName { get; set; }
    }
}

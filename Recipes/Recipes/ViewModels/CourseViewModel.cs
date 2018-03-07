using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class CourseViewModel
    {
        public int CourseId { get; set; }
        [Required]
        [MinLength(3)]
        public string CourseName { get; set; }
    }
}

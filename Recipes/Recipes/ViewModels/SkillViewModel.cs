using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.ViewModels
{
    public class SkillViewModel
    {
        public int SkillId { get; set; }
        [Required]
        [MinLength(3)]
        public string Skill { get; set; }
    }
}

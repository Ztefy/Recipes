﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class Skill
    {
        [Key]
        public int SkillId { get; set; }
        public string SkillLevel { get; set; }
    }
}

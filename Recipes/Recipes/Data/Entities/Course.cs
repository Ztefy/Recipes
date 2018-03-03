﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        public string Name { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeCuisine
    {
        public int Id { get; set; }
        public Cuisine Cuisine { get; set; }
        public Recipe Recipe { get; set; }
    }
}

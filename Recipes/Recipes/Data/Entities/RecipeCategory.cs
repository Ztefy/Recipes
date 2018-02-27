using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeCategory
    {
        public int Id { get; set; }
        public Category Category { get; set; }
        public Recipe Recipe { get; set; }
    }
}

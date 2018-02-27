using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeImage
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public Recipe Recipe { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeTags
    {
        public int Id { get; set; }
        public Tag Tag { get; set; }
        public Recipe Recipe { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeTags
    {
        [Key]
        public int Id { get; set; }
        public int TagId { get; set; }
        public Tag Tag { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }

    }
}

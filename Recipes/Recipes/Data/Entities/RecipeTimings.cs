using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeTimings
    {
        [Key]
        public int Id { get; set; }
        public int TimingTypeId { get; set; }
        public TimingType Type { get; set; }
        public int Quantity { get; set; }
        public int TimeMeasId { get; set;}
        public TimingMeasurement Measurement { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
    }
}

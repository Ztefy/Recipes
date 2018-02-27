using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class RecipeTimings
    {
        public int Id { get; set; }
        public TimingType Type { get; set; }
        public int Quantity { get; set; }
        public TimingMeasurement Measurement { get; set; }
        public Recipe Recipe { get; set; }
    }
}

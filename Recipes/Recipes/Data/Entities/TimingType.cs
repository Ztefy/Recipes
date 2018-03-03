using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data.Entities
{
    public class TimingType
    {
        [Key]
        public int TimeTypeId { get; set; }
        public string Type { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Recipe()
        {
            ViewBag.Title = "Recipe";

            return View();
        }

        public IActionResult RecipeResults()
        {
            ViewBag.Title = "Recipe Results";

            return View();
        }
    }
}

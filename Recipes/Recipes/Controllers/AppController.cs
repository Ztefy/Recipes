using Microsoft.AspNetCore.Mvc;
using Recipes.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Controllers
{
    public class AppController : Controller
    {
        private readonly IRecipeRepository _repository;

        public AppController(IRecipeRepository repository)
        {
            _repository = repository;
        }

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

        //public IActionResult Test()
        //{
        //    var results = _repository.GetAllRecipes();

        //    return View(results);
        //}
    }
}

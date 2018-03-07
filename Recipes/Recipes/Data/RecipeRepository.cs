﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Recipes.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly RecipeContext _ctx;
        private readonly ILogger<RecipeRepository> _logger;

        public RecipeRepository(RecipeContext ctx,
            ILogger<RecipeRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            try
            {
                _logger.LogInformation("GetAllCategories was called");

                return _ctx.Category
                    .OrderBy(c => c.Name)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get categories: {ex}");
                return null;
            }
        }

        public Category GetCategoryById(int id)
        {
            try
            {
                _logger.LogInformation("GetCategoryById was called");

                return _ctx.Category
                    .Where(c => c.CategoryId == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get category: {ex}");
                return null;
            }
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}

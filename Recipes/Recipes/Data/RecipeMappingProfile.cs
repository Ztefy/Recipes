using AutoMapper;
using Recipes.Data.Entities;
using Recipes.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipes.Data
{
    public class RecipeMappingProfile : Profile
    {
        public RecipeMappingProfile()
        {
            CreateMap<Category, CategoryViewModel>()
                .ForMember(c => c.CategoryName, ex => ex.MapFrom(c => c.Name))
                .ReverseMap();

            CreateMap<Course, CourseViewModel>()
                .ForMember(c => c.CourseName, ex => ex.MapFrom(c => c.Name))
                .ReverseMap();

            CreateMap<Cuisine, CuisineViewModel>()
                .ForMember(c => c.CuisineName, ex => ex.MapFrom(c => c.Name))
                .ReverseMap();

            CreateMap<Ingredient, IngredientViewModel>()
                .ForMember(i => i.IngredientName, ex => ex.MapFrom(i => i.Name))
                .ForMember(i => i.IngredientId, ex => ex.MapFrom(i => i.IngredientId))
                .ReverseMap();

            CreateMap<IngredientMeasurement, IngredientMeasurementViewModel>()
                .ForMember(m => m.IngredientMeasurementId, ex => ex.MapFrom(m => m.IngrMeasId))
                .ForMember(m => m.IngredientMeasurement, ex => ex.MapFrom(m => m.Measurement))
                .ReverseMap();

            CreateMap<IngredientPreparation, IngredientPreparationViewModel>()
                .ForMember(p => p.IngredientPreparationId, ex => ex.MapFrom(p => p.IngPrepId))
                .ForMember(p => p.IngredientPreparation, ex => ex.MapFrom(p => p.Preparation))
                .ReverseMap();

            CreateMap<Skill, SkillViewModel>()
                .ForMember(s => s.Skill, ex => ex.MapFrom(s => s.SkillLevel))
                .ReverseMap();

            CreateMap<Tag, TagViewModel>()
                .ForMember(t => t.TagName, ex => ex.MapFrom(t => t.Name))
                .ReverseMap();

            CreateMap<Recipe, RecipeViewModel>().PreserveReferences()
                .ForMember(r => r.RecipeId, ex => ex.MapFrom(r => r.RecipeId))
                .ForMember(r => r.RecipeName, ex => ex.MapFrom(r => r.RecipeName))
                .ForMember(r => r.RecipeImage, ex => ex.MapFrom(r => r.RecipeImage))
                .ForMember(r => r.Portions, ex => ex.MapFrom(r => r.Portions))
                .ForMember(r => r.Rating, ex => ex.MapFrom(r => r.Rating))
                .ForMember(r => r.PrepTime, ex => ex.MapFrom(r => r.PrepTime))
                .ForMember(r => r.CookTime, ex => ex.MapFrom(r => r.CookTime))
                .ForMember(r => r.Location, ex => ex.MapFrom(r => r.Location))
                .ForMember(r => r.Calories, ex => ex.MapFrom(r => r.Calories))
                .ForMember(r => r.Fat, ex => ex.MapFrom(r => r.Fat))
                .ForMember(r => r.Saturated, ex => ex.MapFrom(r => r.Saturated))
                .ForMember(r => r.Carbohydrates, ex => ex.MapFrom(r => r.Carbohydrates))
                .ForMember(r => r.Sugars, ex => ex.MapFrom(r => r.Sugars))
                .ForMember(r => r.Fibre, ex => ex.MapFrom(r => r.Fibre))
                .ForMember(r => r.Salt, ex => ex.MapFrom(r => r.Salt))
                .ForMember(r => r.Protein, ex => ex.MapFrom(r => r.Protein))
                .ForMember(r => r.Ingredients, ex => ex.MapFrom(r => r.Ingredients.Select(i => i.Ingredient)))
                .ForMember(r => r.Ingredients, ex => ex.MapFrom(r => r.Ingredients.Select(i => i.Measurement)))
                .ForMember(r => r.Ingredients, ex => ex.MapFrom(r => r.Ingredients.Select(i => i.Preparation)))
                .ForMember(r => r.Methods, ex => ex.MapFrom(r => r.Methods))
                .ForMember(r => r.Notes, ex => ex.MapFrom(r => r.Notes))
                .ForMember(r => r.Cuisine, ex => ex.MapFrom(r => r.Cuisine))
                .ForMember(r => r.Tags, ex => ex.MapFrom(r => r.Tags))
                .ForMember(r => r.SkillId, ex => ex.MapFrom(r => r.Skill))
                .ForMember(r => r.CourseId, ex => ex.MapFrom(r => r.Course))
                .ForMember(r => r.CategoryId, ex => ex.MapFrom(r => r.Category))
                .ReverseMap();

            CreateMap<RecipeIngredient, RecipeIngredientViewModel>().PreserveReferences()
                .ForMember(i => i.IngredientId, ex => ex.MapFrom(i => i.Ingredient))
                .ForMember(i => i.ingredientName, ex => ex.Ignore())
                .ForMember(i => i.MeasurementId, ex => ex.MapFrom(i => i.Measurement))
                .ForMember(i => i.PreparationId, ex => ex.MapFrom(i => i.Preparation))
                .ReverseMap();

            CreateMap<RecipeMethod, RecipeMethodViewModel>().PreserveReferences()
                .ReverseMap();

            CreateMap<RecipeCuisine, RecipeCuisineViewModel>().PreserveReferences()
                .ForMember(c => c.CuisineId, ex => ex.MapFrom(c => c.Cuisine))
                .ReverseMap();

            CreateMap<RecipeNote, RecipeNoteViewModel>().PreserveReferences()
                .ReverseMap();

            CreateMap<RecipeTags, RecipeTagViewModel>().PreserveReferences()
                .ForMember(t => t.TagId, ex => ex.MapFrom(t => t.Tag))
                .ReverseMap();
        }
    }
}

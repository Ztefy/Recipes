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

            CreateMap<Recipe, RecipeViewModel>()
                .ReverseMap();

            CreateMap<RecipeIngredient, RecipeIngredientViewModel>()
                .ForMember(i => i.IngredientId, ex => ex.MapFrom(i => i.Ingredient))
                .ForMember(i => i.MeasurementId, ex => ex.MapFrom(i => i.Measurement))
                .ForMember(i => i.PreparationId, ex => ex.MapFrom(i => i.Preparation))
                .ReverseMap();

            CreateMap<RecipeMethod, RecipeMethodViewModel>()
                .ReverseMap();

            CreateMap<RecipeCuisine, RecipeCuisineViewModel>()
                .ForMember(c => c.CuisineId, ex => ex.MapFrom(c => c.Cuisine))
                .ReverseMap();

            CreateMap<RecipeNote, RecipeNoteViewModel>()
                .ReverseMap();

            CreateMap<RecipeTags, RecipeTagViewModel>()
                .ForMember(t => t.TagId, ex => ex.MapFrom(t => t.Tag))
                .ReverseMap();
        }
    }
}

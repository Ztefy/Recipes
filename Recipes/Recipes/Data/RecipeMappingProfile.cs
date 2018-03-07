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
        }
    }
}

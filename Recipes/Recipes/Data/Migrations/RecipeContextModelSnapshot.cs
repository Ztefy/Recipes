﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Recipes.Data;
using System;

namespace Recipes.Migrations
{
    [DbContext(typeof(RecipeContext))]
    partial class RecipeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Recipes.Data.Entities.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CategoryId");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Course", b =>
                {
                    b.Property<int>("CourseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CourseId");

                    b.ToTable("Course");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Cuisine", b =>
                {
                    b.Property<int>("CuisineId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("CuisineId");

                    b.ToTable("Cuisine");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Ingredient", b =>
                {
                    b.Property<int>("IngredientId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("IngredientId");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("Recipes.Data.Entities.IngredientMeasurement", b =>
                {
                    b.Property<int>("IngrMeasId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Measurement");

                    b.HasKey("IngrMeasId");

                    b.ToTable("IngredientMeasurement");
                });

            modelBuilder.Entity("Recipes.Data.Entities.IngredientPreparation", b =>
                {
                    b.Property<int>("IngPrepId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Preparation");

                    b.HasKey("IngPrepId");

                    b.ToTable("IngredientPreparation");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Nutrition", b =>
                {
                    b.Property<int>("NutritionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("NutritionId");

                    b.ToTable("Nutrition");
                });

            modelBuilder.Entity("Recipes.Data.Entities.NutritionMeasurement", b =>
                {
                    b.Property<int>("NutrMeasId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Measurement");

                    b.HasKey("NutrMeasId");

                    b.ToTable("NutritionMeasurement");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Recipe", b =>
                {
                    b.Property<int>("RecipeId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CategoryId");

                    b.Property<int>("CourseId");

                    b.Property<int>("Portions");

                    b.Property<int>("Rating");

                    b.Property<string>("RecipeImage");

                    b.Property<string>("RecipeName");

                    b.Property<int>("SkillId");

                    b.HasKey("RecipeId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("CourseId");

                    b.HasIndex("SkillId");

                    b.ToTable("Recipes");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeCuisine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CuisineId");

                    b.Property<int>("RecipeId");

                    b.HasKey("Id");

                    b.HasIndex("CuisineId");

                    b.HasIndex("RecipeId");

                    b.ToTable("RecipeCuisine");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeIngredient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("IngPrepId");

                    b.Property<int?>("IngrMeasId");

                    b.Property<int?>("IngredientId");

                    b.Property<int>("Quantity");

                    b.Property<int?>("RecipeId");

                    b.HasKey("Id");

                    b.HasIndex("IngPrepId");

                    b.HasIndex("IngrMeasId");

                    b.HasIndex("IngredientId");

                    b.HasIndex("RecipeId");

                    b.ToTable("RecipeIngredient");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeMethod", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Method");

                    b.Property<int>("RecipeId");

                    b.Property<int>("StepNumber");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.ToTable("RecipeMethod");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeNote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Note");

                    b.Property<int>("RecipeId");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.ToTable("RecipeNote");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeNutrition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("NutrMeasId");

                    b.Property<string>("Quantity");

                    b.Property<int>("RecipeId");

                    b.Property<int?>("TypeNutritionId");

                    b.HasKey("Id");

                    b.HasIndex("NutrMeasId");

                    b.HasIndex("RecipeId");

                    b.HasIndex("TypeNutritionId");

                    b.ToTable("RecipeNutrition");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeTags", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("RecipeId");

                    b.Property<int>("TagId");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.HasIndex("TagId");

                    b.ToTable("RecipeTags");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeTimings", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Quantity");

                    b.Property<int>("RecipeId");

                    b.Property<int>("TimeMeasId");

                    b.Property<int>("TimingTypeId");

                    b.HasKey("Id");

                    b.HasIndex("RecipeId");

                    b.HasIndex("TimeMeasId");

                    b.HasIndex("TimingTypeId");

                    b.ToTable("RecipeTiming");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Skill", b =>
                {
                    b.Property<int>("SkillId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("SkillLevel");

                    b.HasKey("SkillId");

                    b.ToTable("Skill");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Tag", b =>
                {
                    b.Property<int>("TagId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("TagId");

                    b.ToTable("Tag");
                });

            modelBuilder.Entity("Recipes.Data.Entities.TimingMeasurement", b =>
                {
                    b.Property<int>("TimeMeasId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Measurement");

                    b.HasKey("TimeMeasId");

                    b.ToTable("TimingMeasurement");
                });

            modelBuilder.Entity("Recipes.Data.Entities.TimingType", b =>
                {
                    b.Property<int>("TimeTypeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("TimeTypeId");

                    b.ToTable("TimingType");
                });

            modelBuilder.Entity("Recipes.Data.Entities.Recipe", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Course", "Course")
                        .WithMany()
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Skill", "Skill")
                        .WithMany()
                        .HasForeignKey("SkillId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeCuisine", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Cuisine", "Cuisine")
                        .WithMany()
                        .HasForeignKey("CuisineId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Cuisine")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeIngredient", b =>
                {
                    b.HasOne("Recipes.Data.Entities.IngredientPreparation", "Preparation")
                        .WithMany()
                        .HasForeignKey("IngPrepId");

                    b.HasOne("Recipes.Data.Entities.IngredientMeasurement", "Measurement")
                        .WithMany()
                        .HasForeignKey("IngrMeasId");

                    b.HasOne("Recipes.Data.Entities.Ingredient", "Ingredient")
                        .WithMany()
                        .HasForeignKey("IngredientId");

                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeMethod", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Methods")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeNote", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Notes")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeNutrition", b =>
                {
                    b.HasOne("Recipes.Data.Entities.NutritionMeasurement", "Measurement")
                        .WithMany()
                        .HasForeignKey("NutrMeasId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Nutrition")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Nutrition", "Type")
                        .WithMany()
                        .HasForeignKey("TypeNutritionId");
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeTags", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Tags")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.Tag", "Tag")
                        .WithMany()
                        .HasForeignKey("TagId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Recipes.Data.Entities.RecipeTimings", b =>
                {
                    b.HasOne("Recipes.Data.Entities.Recipe", "Recipe")
                        .WithMany("Timings")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.TimingMeasurement", "Measurement")
                        .WithMany()
                        .HasForeignKey("TimeMeasId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Recipes.Data.Entities.TimingType", "Type")
                        .WithMany()
                        .HasForeignKey("TimingTypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}

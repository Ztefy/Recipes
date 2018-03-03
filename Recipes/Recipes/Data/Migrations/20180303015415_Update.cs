using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Recipes.Migrations
{
    public partial class Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeIngredient_IngredientPreparation_IngPrepId",
                table: "RecipeIngredient");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeIngredient_IngredientMeasurement_IngrMeasId",
                table: "RecipeIngredient");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTimings_Recipes_RecipeId",
                table: "RecipeTimings");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTimings_TimingMeasurement_TimeMeasId",
                table: "RecipeTimings");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTimings_TimingType_TimingTypeId",
                table: "RecipeTimings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RecipeTimings",
                table: "RecipeTimings");

            migrationBuilder.RenameTable(
                name: "RecipeTimings",
                newName: "RecipeTiming");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTimings_TimingTypeId",
                table: "RecipeTiming",
                newName: "IX_RecipeTiming_TimingTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTimings_TimeMeasId",
                table: "RecipeTiming",
                newName: "IX_RecipeTiming_TimeMeasId");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTimings_RecipeId",
                table: "RecipeTiming",
                newName: "IX_RecipeTiming_RecipeId");

            migrationBuilder.AlterColumn<int>(
                name: "IngrMeasId",
                table: "RecipeIngredient",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "IngPrepId",
                table: "RecipeIngredient",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_RecipeTiming",
                table: "RecipeTiming",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeIngredient_IngredientPreparation_IngPrepId",
                table: "RecipeIngredient",
                column: "IngPrepId",
                principalTable: "IngredientPreparation",
                principalColumn: "IngPrepId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeIngredient_IngredientMeasurement_IngrMeasId",
                table: "RecipeIngredient",
                column: "IngrMeasId",
                principalTable: "IngredientMeasurement",
                principalColumn: "IngrMeasId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTiming_Recipes_RecipeId",
                table: "RecipeTiming",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "RecipeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTiming_TimingMeasurement_TimeMeasId",
                table: "RecipeTiming",
                column: "TimeMeasId",
                principalTable: "TimingMeasurement",
                principalColumn: "TimeMeasId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTiming_TimingType_TimingTypeId",
                table: "RecipeTiming",
                column: "TimingTypeId",
                principalTable: "TimingType",
                principalColumn: "TimeTypeId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeIngredient_IngredientPreparation_IngPrepId",
                table: "RecipeIngredient");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeIngredient_IngredientMeasurement_IngrMeasId",
                table: "RecipeIngredient");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTiming_Recipes_RecipeId",
                table: "RecipeTiming");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTiming_TimingMeasurement_TimeMeasId",
                table: "RecipeTiming");

            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTiming_TimingType_TimingTypeId",
                table: "RecipeTiming");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RecipeTiming",
                table: "RecipeTiming");

            migrationBuilder.RenameTable(
                name: "RecipeTiming",
                newName: "RecipeTimings");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTiming_TimingTypeId",
                table: "RecipeTimings",
                newName: "IX_RecipeTimings_TimingTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTiming_TimeMeasId",
                table: "RecipeTimings",
                newName: "IX_RecipeTimings_TimeMeasId");

            migrationBuilder.RenameIndex(
                name: "IX_RecipeTiming_RecipeId",
                table: "RecipeTimings",
                newName: "IX_RecipeTimings_RecipeId");

            migrationBuilder.AlterColumn<int>(
                name: "IngrMeasId",
                table: "RecipeIngredient",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "IngPrepId",
                table: "RecipeIngredient",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RecipeTimings",
                table: "RecipeTimings",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeIngredient_IngredientPreparation_IngPrepId",
                table: "RecipeIngredient",
                column: "IngPrepId",
                principalTable: "IngredientPreparation",
                principalColumn: "IngPrepId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeIngredient_IngredientMeasurement_IngrMeasId",
                table: "RecipeIngredient",
                column: "IngrMeasId",
                principalTable: "IngredientMeasurement",
                principalColumn: "IngrMeasId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTimings_Recipes_RecipeId",
                table: "RecipeTimings",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "RecipeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTimings_TimingMeasurement_TimeMeasId",
                table: "RecipeTimings",
                column: "TimeMeasId",
                principalTable: "TimingMeasurement",
                principalColumn: "TimeMeasId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTimings_TimingType_TimingTypeId",
                table: "RecipeTimings",
                column: "TimingTypeId",
                principalTable: "TimingType",
                principalColumn: "TimeTypeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

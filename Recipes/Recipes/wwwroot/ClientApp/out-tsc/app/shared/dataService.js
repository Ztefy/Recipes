"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var recipe_1 = require("../shared/recipe");
require("rxjs/add/operator/map");
var _ = require("lodash");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.categories = [];
        this.courses = [];
        this.cuisines = [];
        this.ingredients = [];
        this.ingredientMeasurements = [];
        this.ingredientPreparations = [];
        this.skills = [];
        this.tags = [];
        this.recipe = new recipe_1.Recipe();
    }
    DataService.prototype.loadCategories = function () {
        var _this = this;
        return this.http.get('/api/category')
            .map(function (data) {
            _this.categories = data;
            return true;
        });
    };
    DataService.prototype.loadCourses = function () {
        var _this = this;
        return this.http.get('/api/course')
            .map(function (data) {
            _this.courses = data;
            return true;
        });
    };
    DataService.prototype.loadCuisines = function () {
        var _this = this;
        return this.http.get('/api/cuisine')
            .map(function (data) {
            _this.cuisines = data;
            return true;
        });
    };
    DataService.prototype.loadIngredients = function () {
        var _this = this;
        return this.http.get('/api/ingredient')
            .map(function (data) {
            _this.ingredients = data;
            return true;
        });
    };
    DataService.prototype.loadIngredientMeasurements = function () {
        var _this = this;
        return this.http.get('/api/ingredientMeasurement')
            .map(function (data) {
            _this.ingredientMeasurements = data;
            return true;
        });
    };
    DataService.prototype.loadIngredientPreparations = function () {
        var _this = this;
        return this.http.get('/api/ingredientPreparation')
            .map(function (data) {
            _this.ingredientPreparations = data;
            return true;
        });
    };
    DataService.prototype.loadSkills = function () {
        var _this = this;
        return this.http.get('/api/skill')
            .map(function (data) {
            _this.skills = data;
            return true;
        });
    };
    DataService.prototype.loadTags = function () {
        var _this = this;
        return this.http.get('/api/tag')
            .map(function (data) {
            _this.tags = data;
            return true;
        });
    };
    DataService.prototype.CuisineAddToRecipe = function (cuisine) {
        if (this.recipe.cuisine.findIndex(function (c) { return c.cuisineName === cuisine.cuisineName; }) == -1) {
            var rcuisine = void 0;
            rcuisine = new recipe_1.RecipeCuisine();
            rcuisine.cuisineId = cuisine.cuisineId;
            rcuisine.cuisineName = cuisine.cuisineName;
            this.recipe.cuisine.push(rcuisine);
        }
    };
    DataService.prototype.CuisineRemoveFromRecipe = function (cuisine) {
        var index = this.recipe.cuisine.indexOf(cuisine);
        if (index !== -1) {
            this.recipe.cuisine.splice(index, 1);
        }
    };
    DataService.prototype.TagAddToRecipe = function (tag) {
        if (this.recipe.tags.findIndex(function (t) { return t.tagName === tag.tagName; }) == -1) {
            var rtag = void 0;
            rtag = new recipe_1.RecipeTag();
            rtag.tagId = tag.tagId;
            rtag.tagName = tag.tagName;
            this.recipe.tags.push(rtag);
        }
    };
    DataService.prototype.TagRemoveFromRecipe = function (tag) {
        var index = this.recipe.tags.indexOf(tag);
        if (index !== -1) {
            this.recipe.tags.splice(index, 1);
        }
    };
    DataService.prototype.NoteAddToRecipe = function (note) {
        if (this.recipe.notes.findIndex(function (n) { return n.note === note; }) == -1) {
            var rnote = void 0;
            rnote = new recipe_1.RecipeNote();
            rnote.note = note;
            this.recipe.notes.push(rnote);
        }
    };
    DataService.prototype.NoteRemoveFromRecipe = function (note) {
        var index = this.recipe.notes.indexOf(note);
        if (index !== -1) {
            this.recipe.notes.splice(index, 1);
        }
    };
    DataService.prototype.MethodAddToRecipe = function (method) {
        if (this.recipe.methods.findIndex(function (m) { return m.method === method; }) == -1) {
            var rmethod = void 0;
            rmethod = new recipe_1.RecipeMethod();
            rmethod.stepNumber = this.recipe.methods.length + 1;
            rmethod.method = method;
            this.recipe.methods.push(rmethod);
        }
    };
    DataService.prototype.MethodRemoveFromRecipe = function (method) {
        var index = this.recipe.methods.indexOf(method);
        if (index !== -1) {
            this.recipe.methods.splice(index, 1);
        }
    };
    DataService.prototype.IngredientAddToRecipe = function (quantity, measurement, ingredient, preparation) {
        var index = this.recipe.ingredients.findIndex(function (i) { return i.ingredientName === ingredient.ingredientName; });
        if (index == -1) {
            var object = this.recipe.ingredients[index];
            var ringredient = void 0;
            ringredient = new recipe_1.RecipeIngredient();
            ringredient.quantity = quantity;
            ringredient.measurementId = measurement.ingredientMeasurementId;
            ringredient.measurementMeasurement = measurement.ingredientMeasurement;
            ringredient.ingredientId = ingredient.ingredientId;
            ringredient.ingredientName = ingredient.ingredientName;
            ringredient.preparationId = preparation.ingredientPreparationId;
            ringredient.preparationPreparation = preparation.ingredientPreparation;
            if (_.isEqual(object, ringredient) == false) {
                this.recipe.ingredients.push(ringredient);
            }
        }
    };
    DataService.prototype.IngredientRemoveFromRecipe = function (ingredient) {
        var index = this.recipe.ingredients.indexOf(ingredient);
        if (index !== -1) {
            this.recipe.ingredients.splice(index, 1);
        }
    };
    DataService.prototype.CreateRecipe = function (image, title, portion, skill, preptime, category, cooktime, course, rating, calorie, protein, carb, fat, satfat, fibre, sugar, salt) {
        var _this = this;
        this.recipe.recipeImage = image;
        this.recipe.recipeName = title;
        this.recipe.portions = portion;
        this.recipe.skillSkillLevel = skill;
        this.recipe.prepTime = preptime;
        this.recipe.cookTime = cooktime;
        this.recipe.categoryName = category;
        this.recipe.courseName = course;
        this.recipe.rating = rating;
        this.recipe.calories = calorie;
        this.recipe.protein = protein;
        this.recipe.carbohydrates = carb;
        this.recipe.fat = fat;
        this.recipe.saturated = satfat;
        this.recipe.fibre = fibre;
        this.recipe.sugars = sugar;
        this.recipe.salt = salt;
        return this.http.post('/api/recipe', this.recipe)
            .map(function (response) {
            _this.recipe = new recipe_1.Recipe();
            return true;
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map
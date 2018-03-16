webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>app.component</title>\r\n</head>\r\n<body>\r\n    <create-recipe></create-recipe>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Recipes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var createRecipe_component_1 = __webpack_require__("./ClientApp/app/recipe/createRecipe.component.ts");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                createRecipe_component_1.CreateRecipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/recipe/createRecipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Recipe Creation</h1>\r\n\r\n<div id=\"recipe-info\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingInfo\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseInfo\" aria-expanded=\"true\" aria-controls=\"collapseInfo\" style=\"white-space: normal\">\r\n                    General Info:\r\n                </button>\r\n            </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseInfo\" class=\"collapse show\" aria-labelledby=\"collapseInfo\" data-parent=\"#recipe-info\">\r\n            <div class=\"card-body\">\r\n                <form id=\"basicInfo\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeImageInput\">Recipe Image</label>\r\n                                <input type=\"file\" class=\"form-control-file\" id=\"recipeImageInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col col-md-8\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeTitleInput\">Recipe Title</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"recipeTitleInput\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <form id=\"generalInfo\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipePortionInput\">Number of portions</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipePortionInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeSkillInput\">Skill</label>\r\n                                <select id=\"recipeSkillInput\" class=\"form-control\">\r\n                                    <option selected>Choose...</option>\r\n                                    <option *ngFor=\"let s of skills\">{{ s.skill }}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipePrepTimeInput\">Prep time</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"recipePrepTimeInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCategoryInput\">Category</label>\r\n                                <select id=\"recipeCategoryInput\" class=\"form-control\">\r\n                                    <option selected>Choose...</option>\r\n                                    <option *ngFor=\"let c of categories\">{{ c.categoryName }}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCookTimeInput\">Cook time</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"recipeCookTimeInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCourseInput\">Course</label>\r\n                                <select id=\"recipeCourseInput\" class=\"form-control\">\r\n                                    <option selected>Choose...</option>\r\n                                    <option *ngFor=\"let c of courses\">{{ c.courseName }}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeRatingInput\">Rating</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeRatingInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCuisineInput\">Cuisine</label>\r\n                                <select id=\"recipeCusineInput\" class=\"form-control\">\r\n                                    <option selected>Choose...</option>\r\n                                    <option *ngFor=\"let c of cuisines\">{{ c.cuisineName }}</option>\r\n                                </select>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Add Cuisine</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Remove Cuisine</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeTagInput\">Tag</label>\r\n                                <select id=\"recipeTagInput\" class=\"form-control\">\r\n                                    <option selected>Choose...</option>\r\n                                    <option *ngFor=\"let t of tags\">{{ t.tag }}</option>\r\n                                </select>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Add Tag</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Remove Tag</button>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"recipe-nutrition\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingNutrition\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseNutrition\" aria-expanded=\"true\" aria-controls=\"collapseNutrition\" style=\"white-space: normal\">\r\n                    Nutritional Info (per portion):\r\n                </button>\r\n            </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseNutrition\" class=\"collapse show\" aria-labelledby=\"collapseNutrition\" data-parent=\"#recipe-nutrition\">\r\n            <div class=\"card-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCalorieInput\">Calories (kcal)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeCalorieInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeProteinInput\">Protein (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeProteinInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeCarbohydrateInput\">Carbohydrates (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeCarbohydrateInput\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeFatInput\">Fat (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeFatInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeSaturatedFatInput\">Saturated Fat (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeSaturatedFatInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeFibreInput\">Fibre (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeFibreInput\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeSugarInput\">Sugar (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeSugarInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"recipeSaltInput\">Salt (g)</label>\r\n                                <input type=\"number\" class=\"form-control\" id=\"recipeSaltInput\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"recipe-ingredients\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingIngredients\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseIngredients\" aria-expanded=\"true\" aria-controls=\"collapseIngredients\" style=\"white-space: normal\">\r\n                    Ingredients:\r\n                </button>\r\n            </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseIngredients\" class=\"collapse show\" aria-labelledby=\"collapseIngredients\" data-parent=\"#recipe-ingredients\">\r\n            <div class=\"card-body\">\r\n                <form id=\"ingredientInfo\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-2\">\r\n                            <label for=\"recipeIngredientQuantityInput\">Quantity</label>\r\n                            <input type=\"number\" class=\"form-control\" id=\"recipeIngredientQuantityInput\" />\r\n                        </div>\r\n                        <div class=\"form-group col-md-2\">\r\n                            <label for=\"recipeIngredientMeasurementInput\">Measurement</label>\r\n                            <select id=\"recipeIngredientMeasurementInput\" class=\"form-control\">\r\n                                <option selected>Choose...</option>\r\n                                <option *ngFor=\"let m of ingredientMeasurements\">{{ m.ingredientMeasurement }}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-md-6\">\r\n                            <label for=\"recipeIngredientInput\">Ingredient</label>\r\n                            <select id=\"recipeIngredientInput\" class=\"form-control\">\r\n                                <option selected>Choose...</option>\r\n                                <option *ngFor=\"let i of ingredients\">{{ i.ingredientName }}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-md-2\">\r\n                            <label for=\"recipeIngredientPreparationInput\">Preparation</label>\r\n                            <select id=\"recipeIngredientPreparationInput\" class=\"form-control\">\r\n                                <option selected>Choose...</option>\r\n                                <option *ngFor=\"let p of ingredientPreparations\">{{ p.ingredientPreparation }}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Add Ingredient</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Remove Ingredient</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"recipe-method\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingMethod\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseMethod\" aria-expanded=\"true\" aria-controls=\"collapseMethod\" style=\"white-space: normal\">\r\n                    Method:\r\n                </button>\r\n            </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseMethod\" class=\"collapse show\" aria-labelledby=\"collapseMethod\" data-parent=\"#recipe-method\">\r\n            <div class=\"card-body\">\r\n                <form id=\"methodInfo\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"recipeMethodInput\">Method</label>\r\n                        <textarea class=\"form-control\" id=\"recipeMethodInput\" rows=\"3\"></textarea>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Add Method</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Remove Method</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"recipe-notes\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingNotes\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseNotes\" aria-expanded=\"true\" aria-controls=\"collapseNotes\" style=\"white-space: normal\">\r\n                    Notes:\r\n                </button>\r\n            </h5>\r\n        </div>\r\n\r\n        <div id=\"collapseNotes\" class=\"collapse show\" aria-labelledby=\"collapseNotes\" data-parent=\"#recipe-notes\">\r\n            <div class=\"card-body\">\r\n                <form id=\"noteInfo\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"recipeNoteInput\">Note</label>\r\n                        <textarea class=\"form-control\" id=\"recipeNoteInput\" rows=\"3\"></textarea>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Add Note</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Remove Note</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<button type=\"submit\" class=\"btn btn-primary\">Create Recipe</button>"

/***/ }),

/***/ "./ClientApp/app/recipe/createRecipe.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var CreateRecipe = /** @class */ (function () {
    function CreateRecipe(data) {
        this.data = data;
    }
    CreateRecipe.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCategories()
            .subscribe(function (success) {
            if (success) {
                _this.categories = _this.data.categories;
            }
        });
        this.data.loadCourses()
            .subscribe(function (success) {
            if (success) {
                _this.courses = _this.data.courses;
            }
        });
        this.data.loadCuisines()
            .subscribe(function (success) {
            if (success) {
                _this.cuisines = _this.data.cuisines;
            }
        });
        this.data.loadIngredients()
            .subscribe(function (success) {
            if (success) {
                _this.ingredients = _this.data.ingredients;
            }
        });
        this.data.loadIngredientMeasurements()
            .subscribe(function (success) {
            if (success) {
                _this.ingredientMeasurements = _this.data.ingredientMeasurements;
            }
        });
        this.data.loadIngredientPreparations()
            .subscribe(function (success) {
            if (success) {
                _this.ingredientPreparations = _this.data.ingredientPreparations;
            }
        });
        this.data.loadSkills()
            .subscribe(function (success) {
            if (success) {
                _this.skills = _this.data.skills;
            }
        });
        this.data.loadTags()
            .subscribe(function (success) {
            if (success) {
                _this.tags = _this.data.tags;
            }
        });
    };
    CreateRecipe = __decorate([
        core_1.Component({
            selector: 'create-recipe',
            template: __webpack_require__("./ClientApp/app/recipe/createRecipe.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], CreateRecipe);
    return CreateRecipe;
}());
exports.CreateRecipe = CreateRecipe;


/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
    DataService.prototype.AddCuisineToRecipe = function (cuisine) {
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
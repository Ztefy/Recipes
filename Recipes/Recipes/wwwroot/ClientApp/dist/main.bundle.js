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
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/recipe/createRecipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Recipe Creation</h1>\r\n\r\n<form id=\"basicInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeTitleInput\">Recipe Title</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipeTitleInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeImageInput\">Recipe Image</label>\r\n        <input type=\"file\" class=\"form-control-file\" id=\"recipeImageInput\" />\r\n    </div>\r\n</form>\r\n<form id=\"generalInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipePortionInput\">Number of portions</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipePortionInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipePrepTimeInput\">Prep time</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipePrepTimeInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeCookTimeInput\">Cook time</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipeCookTimeInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeSkillInput\">Skill</label>\r\n        <select id=\"recipeSkillInput\"  class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Skill 1</option>\r\n            <option>Skill 2</option>\r\n            <option>Skill 3</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeRatingInput\">Rating</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeRatingInput\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeCourseInput\">Course</label>\r\n        <select id=\"recipeCourseInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Course 1</option>\r\n            <option>Course 2</option>\r\n            <option>Course 3</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeCuisineInput\">Cuisine</label>\r\n        <select id=\"recipeCusineInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Cuisine 1</option>\r\n            <option>Cuisine 2</option>\r\n            <option>Cuisine 3</option>\r\n        </select>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Add Cuisine</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Remove Cuisine</button>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeTagInput\">Tag</label>\r\n        <select id=\"recipeTagInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Tag 1</option>\r\n            <option>Tag 2</option>\r\n            <option>Tag 3</option>\r\n        </select>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Add Tag</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Remove Tag</button>\r\n</form>\r\n<form id=\"nutritionInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeCalorieInput\">Calories (kcal)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeCalorieInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeProteinInput\">Protein (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeProteinInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeCarbohydrateInput\">Carbohydrates (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeCarbohydrateInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeFatInput\">Fat (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeFatInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeSaturatedFatInput\">Saturated Fat (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeSaturatedFatInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeFibreInput\">Fibre (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeFibreInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeSugarInput\">Sugar (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeSugarInput\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeSaltInput\">Salt (g)</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeSaltInput\" />\r\n    </div>\r\n</form>\r\n<form id=\"ingredientInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeIngredientQuantityInput\">Ingredient Quantity</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"recipeIngredientQuantityInput\" />\r\n        <label for=\"recipeIngredientMeasurementInput\">Ingredient Measurement</label>\r\n        <select id=\"recipeIngredientMeasurementInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Measurement 1</option>\r\n            <option>Measurement 2</option>\r\n            <option>Measurement 3</option>\r\n        </select>\r\n        <label for=\"recipeIngredientInput\">Ingredient</label>\r\n        <select id=\"recipeIngredientInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Ingredient 1</option>\r\n            <option>Ingredient 2</option>\r\n            <option>Ingredient 3</option>\r\n        </select>\r\n        <label for=\"recipeIngredientPreparationInput\">Ingredient Preparation</label>\r\n        <select id=\"recipeIngredientPreparationInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Preparation 1</option>\r\n            <option>Preparation 2</option>\r\n            <option>Preparation 3</option>\r\n        </select>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Add Ingredient</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Remove Ingredient</button>\r\n</form>\r\n<form id=\"methodInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeMethodInput\">Method</label>\r\n        <select id=\"recipeMethodInput\" class=\"form-control\">\r\n            <option selected>Choose...</option>\r\n            <option>Method 1</option>\r\n            <option>Method 2</option>\r\n            <option>Method 3</option>\r\n        </select>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Add Method</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Remove Method</button>\r\n</form>\r\n<form id=\"noteInfo\">\r\n    <div class=\"form-group\">\r\n        <label for=\"recipeNoteInput\">Note</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"recipeNoteInput\" />\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-primary\">Add Note</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Remove Note</button>\r\n</form>"

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CreateRecipe = /** @class */ (function () {
    function CreateRecipe() {
    }
    CreateRecipe = __decorate([
        core_1.Component({
            selector: 'create-recipe',
            template: __webpack_require__("./ClientApp/app/recipe/createRecipe.component.html"),
            styleUrls: []
        })
    ], CreateRecipe);
    return CreateRecipe;
}());
exports.CreateRecipe = CreateRecipe;


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
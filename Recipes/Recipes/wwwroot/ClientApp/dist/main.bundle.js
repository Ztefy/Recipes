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

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <base href=\"/\">\r\n</head>\r\n<body>\r\n    <h1>{{ Title }}</h1>\r\n    <router-outlet></router-outlet>\r\n</body>\r\n</html>"

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
var recipeResults_component_1 = __webpack_require__("./ClientApp/app/results/recipeResults.component.ts");
var recipe_component_1 = __webpack_require__("./ClientApp/app/recipe/recipe.component.ts");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [
    //{ path: "", component: Results },
    //{ path: "recipe", component: Recipe }
    { path: "", component: recipe_component_1.Recipe }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                recipeResults_component_1.Results,
                recipe_component_1.Recipe
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

/***/ "./ClientApp/app/recipe/recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Recipe</h3>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n        <div class=\"recipe-title\">\r\n            <h2>Recipe Name</h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-12\">\r\n        <div class=\"recipe-image\">\r\n            <img src=\"~/img/download.jpg\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-12\">\r\n        <div id=\"recipe-info\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingInfo\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseInfo\" aria-expanded=\"true\" aria-controls=\"collapseInfo\" style=\"white-space: normal\">\r\n                            General Info:\r\n                        </button>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseInfo\" class=\"collapse show\" aria-labelledby=\"collapseInfo\" data-parent=\"#recipe-info\">\r\n                    <div class=\"card-body\">\r\n                        <ul>\r\n                            <li>Portions: 4</li>\r\n                            <li>Prep time: 30 mins</li>\r\n                            <li>Cook time: 40 mins</li>\r\n                            <li>Skill: Easy</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-12\">\r\n        <div id=\"recipe-nutrition\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingNutrition\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseNutrition\" aria-expanded=\"true\" aria-controls=\"collapseNutrition\" style=\"white-space: normal\">\r\n                            Nutritional Info (per portion):\r\n                        </button>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseNutrition\" class=\"collapse show\" aria-labelledby=\"collapseNutrition\" data-parent=\"#recipe-nutrition\">\r\n                    <div class=\"card-body\">\r\n                        <ul>\r\n                            <li>Calories: 500kcal</li>\r\n                            <li>Protein: 50g</li>\r\n                            <li>Carbohydrates: 60g</li>\r\n                            <li>Fat: 10g</li>\r\n                            <li>Saturated Fat: 4g</li>\r\n                            <li>Fibre: 10g</li>\r\n                            <li>Sugar: 5g</li>\r\n                            <li>Salt: 1.2g</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-12\">\r\n        <div id=\"recipe-ingredients\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingIngredients\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseIngredients\" aria-expanded=\"true\" aria-controls=\"collapseIngredients\" style=\"white-space: normal\">\r\n                            Ingredients:\r\n                        </button>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseIngredients\" class=\"collapse show\" aria-labelledby=\"collapseIngredients\" data-parent=\"#recipe-ingredients\">\r\n                    <div class=\"card-body\">\r\n                        <ul>\r\n                            <li>Ingredient 1</li>\r\n                            <li>Ingredient 2</li>\r\n                            <li>Ingredient 3</li>\r\n                            <li>Ingredient 4</li>\r\n                            <li>Ingredient 5</li>\r\n                            <li>Ingredient 6</li>\r\n                            <li>Ingredient 7</li>\r\n                            <li>Ingredient 8</li>\r\n                            <li>Ingredient 9</li>\r\n                            <li>Ingredient 10</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-8 col-sm-12\">\r\n        <div id=\"recipe-method\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingMethod\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseMethod\" aria-expanded=\"true\" aria-controls=\"collapseMethod\" style=\"white-space: normal\">\r\n                            Method:\r\n                        </button>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseMethod\" class=\"collapse show\" aria-labelledby=\"collapseMethod\" data-parent=\"#recipe-method\">\r\n                    <div class=\"card-body\">\r\n                        <ul>\r\n                            <li>1. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>2. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>3. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>4. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>5. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>6. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>7. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>8. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>9. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>10. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>11. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>12. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>13. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>14. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>15. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>16. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>17. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>18. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>19. Things to do here to prepare and cook the reipe.</li>\r\n                            <li>20. Things to do here to prepare and cook the reipe.</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n        <div id=\"recipe-notes\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingNotes\">\r\n                    <h5 class=\"mb-0\">\r\n                        <button class=\"btn btn-block btn-dark\" data-toggle=\"collapse\" data-target=\"#collapseNotes\" aria-expanded=\"true\" aria-controls=\"collapseNotes\" style=\"white-space: normal\">\r\n                            Notes:\r\n                        </button>\r\n                    </h5>\r\n                </div>\r\n\r\n                <div id=\"collapseNotes\" class=\"collapse show\" aria-labelledby=\"collapseNotes\" data-parent=\"#recipe-notes\">\r\n                    <div class=\"card-body\">\r\n                        <ul>\r\n                            <li>1. Notes</li>\r\n                            <li>2. Notes</li>\r\n                            <li>3. Notes</li>\r\n                            <li>4. Notes</li>\r\n                            <li>5. Notes</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/recipe/recipe.component.ts":
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
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    Recipe = __decorate([
        core_1.Component({
            selector: 'recipe',
            template: __webpack_require__("./ClientApp/app/recipe/recipe.component.html"),
            styleUrls: []
        })
    ], Recipe);
    return Recipe;
}());
exports.Recipe = Recipe;


/***/ }),

/***/ "./ClientApp/app/results/recipeResults.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck\">\r\n    <div *ngFor=\"let r of recipes\" class=\"card\">\r\n        <img class=\"card-img-top img-fluid\" src=\"/img/{{ r.RecipeImage }}).jpg\" alt=\"{{ r.RecipeName }}\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{ r.RecipeName }}</h5>\r\n            <br />Portions: {{ r.Portions }}\r\n            <br />Prep time: 30 mins\r\n            <br />Cook time: 40 mins\r\n            <br />Skill: {{ r.Skill.SkillLevel }}\r\n            <br />Rating: {{ r.Rating }}\r\n            <p class=\"card-text\"><small class=\"text-muted\">Calories: 500kcal</small></p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/results/recipeResults.component.ts":
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
var Results = /** @class */ (function () {
    function Results(data) {
        this.data = data;
        this.recipes = [];
        this.recipes = data.recipes;
    }
    Results.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadRecipes()
            .subscribe(function (success) {
            if (success) {
                _this.recipes = _this.data.recipes;
            }
        });
    };
    Results = __decorate([
        core_1.Component({
            selector: 'results',
            template: __webpack_require__("./ClientApp/app/results/recipeResults.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], Results);
    return Results;
}());
exports.Results = Results;


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
        this.recipe = [];
        this.recipes = [];
    }
    DataService.prototype.loadRecipe = function (id) {
        var _this = this;
        return this.http.get('/api/recipe')
            .map(function (data) {
            _this.recipe = data;
            return true;
        });
    };
    DataService.prototype.loadRecipes = function () {
        var _this = this;
        return this.http.get('/api/recipes')
            .map(function (data) {
            _this.recipes = data;
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
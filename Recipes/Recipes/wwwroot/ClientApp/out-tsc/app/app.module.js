"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var createRecipe_component_1 = require("./recipe/createRecipe.component");
var addRecipeCuisine_component_1 = require("./recipe/addRecipeCuisine.component");
var addRecipeTag_component_1 = require("./recipe/addRecipeTag.component");
var addRecipeNote_component_1 = require("./recipe/addRecipeNote.component");
var addRecipeMethod_component_1 = require("./recipe/addRecipeMethod.component");
var addRecipeIngredient_component_1 = require("./recipe/addRecipeIngredient.component");
var dataService_1 = require("./shared/dataService");
var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                createRecipe_component_1.CreateRecipe,
                addRecipeCuisine_component_1.AddRecipeCuisine,
                addRecipeTag_component_1.AddRecipeTag,
                addRecipeNote_component_1.AddRecipeNote,
                addRecipeMethod_component_1.AddRecipeMethod,
                addRecipeIngredient_component_1.AddRecipeIngredient
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
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
//# sourceMappingURL=app.module.js.map
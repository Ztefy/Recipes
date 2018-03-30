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
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var AddRecipeIngredient = /** @class */ (function () {
    function AddRecipeIngredient(data) {
        this.data = data;
    }
    AddRecipeIngredient.prototype.ngOnInit = function () {
        var _this = this;
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
    };
    AddRecipeIngredient.prototype.addIngredient = function (quantity, measurement, ingredient, preparation) {
        this.data.IngredientAddToRecipe(quantity, measurement, ingredient, preparation);
    };
    AddRecipeIngredient.prototype.removeIngredient = function (ingredient) {
        this.data.IngredientRemoveFromRecipe(ingredient);
    };
    AddRecipeIngredient = __decorate([
        core_1.Component({
            selector: 'recipe-ingredient',
            templateUrl: 'addRecipeIngredient.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], AddRecipeIngredient);
    return AddRecipeIngredient;
}());
exports.AddRecipeIngredient = AddRecipeIngredient;
//# sourceMappingURL=addRecipeIngredient.component.js.map
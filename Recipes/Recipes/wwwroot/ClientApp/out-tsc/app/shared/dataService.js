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
require("rxjs/add/operator/map");
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
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map
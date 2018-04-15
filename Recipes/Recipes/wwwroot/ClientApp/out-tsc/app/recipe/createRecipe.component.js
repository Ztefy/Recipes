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
var CreateRecipe = /** @class */ (function () {
    function CreateRecipe(data /*, public router: Router*/) {
        this.data = data; /*, public router: Router*/
        this.errorMessage = "";
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
        this.data.loadSkills()
            .subscribe(function (success) {
            if (success) {
                _this.skills = _this.data.skills;
            }
        });
    };
    CreateRecipe.prototype.onCreateRecipe = function (image, title, portion, skill, preptime, category, cooktime, course, rating, calorie, protein, carb, fat, satfat, fibre, sugar, salt) {
        var _this = this;
        this.data.CreateRecipe(image, title, portion, skill, preptime, category, cooktime, course, rating, calorie, protein, carb, fat, satfat, fibre, sugar, salt)
            .subscribe(function (success) {
            if (success) {
                //TODO Routing
                //this.router.navigate(['/']);
            }
        }, function (err) { return _this.errorMessage = "Failed to save recipe"; });
    };
    CreateRecipe = __decorate([
        core_1.Component({
            selector: 'create-recipe',
            templateUrl: 'createRecipe.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService /*, public router: Router*/])
    ], CreateRecipe);
    return CreateRecipe;
}());
exports.CreateRecipe = CreateRecipe;
//# sourceMappingURL=createRecipe.component.js.map
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'create-recipe',
    templateUrl: 'createRecipe.component.html',
    styleUrls: []
})

export class CreateRecipe {

    constructor(private data: DataService) {
        this.categories = data.categories;
        this.courses = data.courses;
        this.cuisines = data.cuisines;
        this.ingredients = data.ingredients;
        this.ingredientMeasurements = data.ingredientMeasurements;
        this.ingredientPreparations = data.ingredientPreparations;
        this.skills = data.skills;
        this.tags = data.tags;
    }

    public categories = [];

    public courses = [];

    public cuisines = [];

    public ingredients = [];

    public ingredientMeasurements = [];

    public ingredientPreparations = [];

    public skills = [];

    public tags = [];
}

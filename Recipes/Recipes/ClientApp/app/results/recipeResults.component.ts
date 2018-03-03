import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'recipe-results',
    templateUrl: 'recipeResults.component.html',
    styleUrls: []
})
export class RecipeResults implements OnInit {

    constructor(private data: DataService) {
        this.recipes = data.recipes;
    }

    public recipes = [];

    ngOnInit(): void {
        this.data.loadRecipes()
            .subscribe(success => {
                if (success) {
                    this.recipes = this.data.recipes;
                }
            });
    }
}
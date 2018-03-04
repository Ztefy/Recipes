import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'results',
    templateUrl: 'recipeResults.component.html',
    styleUrls: []
})
export class Results implements OnInit {
    public recipes = [];

    constructor(private data: DataService) {
        this.recipes = data.recipes;
    }

    

    ngOnInit(): void {
        this.data.loadRecipes()
            .subscribe(success => {
                if (success) {
                    this.recipes = this.data.recipes;
                }
            });
    }
}
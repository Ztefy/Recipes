import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Cuisine } from '../shared/cuisine';

@Component({
    selector: 'recipe-cuisine',
    templateUrl: 'addRecipeCuisine.component.html',
    styleUrls: []
})

export class AddRecipeCuisine implements OnInit {

    constructor(private data: DataService) { }

    public cuisines: Cuisine[];

    ngOnInit(): void {
        this.data.loadCuisines()
            .subscribe(success => {
                if (success) {
                    this.cuisines = this.data.cuisines;
                }
            })
    }

    addCuisine(cuisine: Cuisine) {
        this.data.CuisineAddToRecipe(cuisine);
    }

    //TODO - Not functioning
        removeCuisine(cuisine: Cuisine) {
        this.data.CuisineRemoveFromRecipe(cuisine);
    }
}
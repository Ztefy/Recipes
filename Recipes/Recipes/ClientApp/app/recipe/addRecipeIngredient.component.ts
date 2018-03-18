import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Ingredient } from '../shared/ingredient';
import { IngredientMeasurement } from '../shared/ingredientmeasurement';
import { IngredientPreparation } from '../shared/ingredientpreparation';

@Component({
    selector: 'recipe-ingredient',
    templateUrl: 'addRecipeIngredient.component.html',
    styleUrls: []
})

export class AddRecipeIngredient implements OnInit{

    constructor(private data: DataService) { }

    public ingredients: Ingredient[];

    public ingredientMeasurements: IngredientMeasurement[];

    public ingredientPreparations: IngredientPreparation[];

    ngOnInit(): void {
        this.data.loadIngredients()
            .subscribe(success => {
                if (success) {
                    this.ingredients = this.data.ingredients;
                }
            })

        this.data.loadIngredientMeasurements()
            .subscribe(success => {
                if (success) {
                    this.ingredientMeasurements = this.data.ingredientMeasurements;
                }
            })

        this.data.loadIngredientPreparations()
            .subscribe(success => {
                if (success) {
                    this.ingredientPreparations = this.data.ingredientPreparations;
                }
            })
    }

    addIngredient(quantity, measurement: IngredientMeasurement, ingredient: Ingredient, preparation: IngredientPreparation) {
        this.data.IngredientAddToRecipe(quantity, measurement, ingredient, preparation);
    }
}
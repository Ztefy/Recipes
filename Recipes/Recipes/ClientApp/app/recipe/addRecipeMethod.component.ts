import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { RecipeMethod } from '../shared/recipe';

@Component({
    selector: 'recipe-method',
    templateUrl: 'addRecipeMethod.component.html',
    styleUrls: []
})

export class AddRecipeMethod {

    constructor(private data: DataService) { }

    addMethod(method: RecipeMethod) {
        this.data.MethodAddToRecipe(method);
    }
}
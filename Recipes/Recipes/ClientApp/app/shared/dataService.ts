import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as recipes from './recipe';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    //public recipe: recipes.Recipe = [];

    //loadRecipe(id: number): recipes.Recipe {
    //    return this.http.get('/api/recipe')
    //        .map((data: any[]) => {
    //            this.recipe = data;
    //            return true;
    //});

    public recipes = [];

    loadRecipes() {
        return this.http.get('/api/recipes')
            .map((data: any[]) => {
                this.recipes = data;
                return true;
            });
    }
}
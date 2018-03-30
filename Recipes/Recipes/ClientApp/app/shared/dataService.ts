import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Course } from '../shared/course';
import { Cuisine } from '../shared/cuisine';
import { Ingredient } from '../shared/ingredient';
import { IngredientMeasurement } from '../shared/ingredientmeasurement';
import { IngredientPreparation } from '../shared/ingredientpreparation';
import { Skill } from '../shared/skill';
import { Tag } from '../shared/tag';
import { Recipe, RecipeCuisine, RecipeTag, RecipeNote, RecipeMethod, RecipeIngredient } from '../shared/recipe';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public categories: Category[] = [];

    public courses: Course[] = [];

    public cuisines: Cuisine[] = [];

    public ingredients: Ingredient[] = [];

    public ingredientMeasurements: IngredientMeasurement[] = [];

    public ingredientPreparations: IngredientPreparation[] = [];

    public skills: Skill[] = [];

    public tags: Tag[] = [];

    public recipe: Recipe = new Recipe();

    public loadCategories(): Observable<boolean> {
        return this.http.get('/api/category')
            .map((data: any[]) => {
                this.categories = data;
                return true;
            });
    }

    public loadCourses(): Observable<boolean> {
        return this.http.get('/api/course')
            .map((data: any[]) => {
                this.courses = data;
                return true;
            });
    }

    public loadCuisines(): Observable<boolean> {
        return this.http.get('/api/cuisine')
            .map((data: any[]) => {
                this.cuisines = data;
                return true;
            });
    }

    public loadIngredients(): Observable<boolean> {
        return this.http.get('/api/ingredient')
            .map((data: any[]) => {
                this.ingredients = data;
                return true;
            });
    }

    public loadIngredientMeasurements(): Observable<boolean> {
        return this.http.get('/api/ingredientMeasurement')
            .map((data: any[]) => {
                this.ingredientMeasurements = data;
                return true;
            });
    }

    public loadIngredientPreparations(): Observable<boolean> {
        return this.http.get('/api/ingredientPreparation')
            .map((data: any[]) => {
                this.ingredientPreparations = data;
                return true;
            });
    }

    public loadSkills(): Observable<boolean> {
        return this.http.get('/api/skill')
            .map((data: any[]) => {
                this.skills = data;
                return true;
            });
    }

    public loadTags(): Observable<boolean> {
        return this.http.get('/api/tag')
            .map((data: any[]) => {
                this.tags = data;
                return true;
            });
    }

    public CuisineAddToRecipe(cuisine: Cuisine) {

        if (this.recipe.cuisine.findIndex(c => c.cuisineName === cuisine.cuisineName) == -1) {

            let rcuisine: RecipeCuisine;

            rcuisine = new RecipeCuisine();
            rcuisine.cuisineId = cuisine.cuisineId;
            rcuisine.cuisineName = cuisine.cuisineName;

            this.recipe.cuisine.push(rcuisine);
        }
    }

    public CuisineRemoveFromRecipe(cuisine: Cuisine) {
        const index: number = this.recipe.cuisine.indexOf(cuisine);

        if (index !== -1) {
            this.recipe.cuisine.splice(index, 1);
        }
    }

    public TagAddToRecipe(tag: Tag) {

        if (this.recipe.tags.findIndex(t => t.tagName === tag.tagName) == -1) {

            let rtag: RecipeTag;

            rtag = new RecipeTag();
            rtag.tagId = tag.tagId;
            rtag.tagName = tag.tagName;

            this.recipe.tags.push(rtag);
        }
    }

    public TagRemoveFromRecipe(tag: Tag) {
        const index: number = this.recipe.tags.indexOf(tag);

        if (index !== -1) {
            this.recipe.tags.splice(index, 1);
        }
    }

    public NoteAddToRecipe(note) {

        if (this.recipe.notes.findIndex(n => n.note === note) == -1) {

            let rnote: RecipeNote;

            rnote = new RecipeNote();
            rnote.note = note;

            this.recipe.notes.push(rnote);
        }
    }

    public NoteRemoveFromRecipe(note: RecipeNote) {
        const index: number = this.recipe.notes.indexOf(note);

        if (index !== -1) {
            this.recipe.notes.splice(index, 1);
        }
    }

    public MethodAddToRecipe(method) {

        if (this.recipe.methods.findIndex(m => m.method === method) == -1) {

            let rmethod: RecipeMethod;

            rmethod = new RecipeMethod();
            rmethod.stepNumber = this.recipe.methods.length + 1;
            rmethod.method = method;

            this.recipe.methods.push(rmethod);
        }
    }

    public MethodRemoveFromRecipe(method: RecipeMethod) {
        const index: number = this.recipe.methods.indexOf(method);

        if (index !== -1) {
            this.recipe.methods.splice(index, 1);
        }
    }

    public IngredientAddToRecipe(quantity, measurement: IngredientMeasurement, ingredient: Ingredient, preparation: IngredientPreparation) {

        const index: number = this.recipe.ingredients.findIndex(
            function (i) {
                return i.ingredientName === ingredient.ingredientName && i.measurementMeasurement === measurement.ingredientMeasurement && i.preparationPreparation === preparation.ingredientPreparation && i.quantity === quantity;
            }
        );

        if (index == -1) {

            let ringredient: RecipeIngredient;

            ringredient = new RecipeIngredient();
            ringredient.quantity = quantity;
            ringredient.measurementId = measurement.ingredientMeasurementId;
            ringredient.measurementMeasurement = measurement.ingredientMeasurement;
            ringredient.ingredientId = ingredient.ingredientId;
            ringredient.ingredientName = ingredient.ingredientName;
            ringredient.preparationId = preparation.ingredientPreparationId;
            ringredient.preparationPreparation = preparation.ingredientPreparation;

            this.recipe.ingredients.push(ringredient);
        }
    }

    public IngredientRemoveFromRecipe(ingredient: RecipeIngredient) {
        const index: number = this.recipe.ingredients.indexOf(ingredient);

        if (index !== -1) {
            this.recipe.ingredients.splice(index, 1);
        }
    }
}
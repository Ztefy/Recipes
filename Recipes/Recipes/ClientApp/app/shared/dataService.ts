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
import 'rxjs/add/operator/map';

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

    public AddCuisineToRecipe(cuisine: Cuisine) {

    }
}
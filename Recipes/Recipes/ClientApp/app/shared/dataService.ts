import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public categories = [];

    public courses = [];

    public cuisines = [];

    public ingredients = [];

    public ingredientMeasurements = [];

    public ingredientPreparations = [];

    public skills = [];

    public tags = [];

    loadCategories() {
        return this.http.get('/api/category')
            .map((data: any[]) => {
                this.categories = data;
                return true;
            });
    }

    loadCourses() {
        return this.http.get('/api/course')
            .map((data: any[]) => {
                this.courses = data;
                return true;
            });
    }

    loadCuisines() {
        return this.http.get('/api/cuisine')
            .map((data: any[]) => {
                this.cuisines = data;
                return true;
            });
    }

    loadIngredients() {
        return this.http.get('/api/ingredient')
            .map((data: any[]) => {
                this.ingredients = data;
                return true;
            });
    }

    loadIngredientMeasurements() {
        return this.http.get('/api/ingredientMeasurement')
            .map((data: any[]) => {
                this.ingredientMeasurements = data;
                return true;
            });
    }

    loadIngredientPreparations() {
        return this.http.get('/api/ingredientPreparation')
            .map((data: any[]) => {
                this.ingredientPreparations = data;
                return true;
            });
    }

    loadSkills() {
        return this.http.get('/api/skill')
            .map((data: []) => {
                this.skills = data;
                return true;
            });
    }

    loadTags() {
        return this.http.get('/api/tag')
            .map((data: any[]) => {
                this.tags = data;
                return true;
            });
    }
}
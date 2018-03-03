import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }

    public recipes = [];

    loadRecipes() {
        return this.http.get('/api/recipes')
            .map((data: any[]) => {
                this.recipes = data;
                return true;
            });
    }
}
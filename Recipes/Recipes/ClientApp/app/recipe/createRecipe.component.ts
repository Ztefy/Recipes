import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Category } from '../shared/category';
import { Course } from '../shared/course';
import { Cuisine } from '../shared/cuisine';
import { Ingredient } from '../shared/ingredient';
import { IngredientMeasurement } from '../shared/ingredientmeasurement';
import { IngredientPreparation } from '../shared/ingredientpreparation';
import { Skill } from '../shared/skill';
import { Tag } from '../shared/tag';

@Component({
    selector: 'create-recipe',
    templateUrl: 'createRecipe.component.html',
    styleUrls: []
})

export class CreateRecipe implements OnInit {

    constructor(private data: DataService) {
    }

    public categories: Category[];

    public courses: Course[];

    public cuisines: Cuisine[];

    public ingredients: Ingredient[];

    public ingredientMeasurements: IngredientMeasurement[];

    public ingredientPreparations: IngredientPreparation[];

    public skills: Skill[];

    public tags: Tag[];

    ngOnInit(): void {
        this.data.loadCategories()
            .subscribe(success => {
                if (success) {
                    this.categories = this.data.categories;
                }
            })

        this.data.loadCourses()
            .subscribe(success => {
                if (success) {
                    this.courses = this.data.courses;
                }
            })

        this.data.loadCuisines()
            .subscribe(success => {
                if (success) {
                    this.cuisines = this.data.cuisines;
                }
            })

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

        this.data.loadSkills()
            .subscribe(success => {
                if (success) {
                    this.skills = this.data.skills;
                }
            })

        this.data.loadTags()
            .subscribe(success => {
                if (success) {
                    this.tags = this.data.tags;
                }
            })
    }
}

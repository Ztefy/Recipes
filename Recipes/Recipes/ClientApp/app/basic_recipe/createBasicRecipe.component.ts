import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Category } from '../shared/category';
import { Course } from '../shared/course';
import { Skill } from '../shared/skill';
import { Router } from '@angular/router';

@Component({
    selector: 'create-basic-recipe',
    templateUrl: 'createBasicRecipe.component.html',
    styleUrls: []
})

export class CreateBasicRecipe implements OnInit {

    constructor(private data: DataService/*, public router: Router*/) { }

    public categories: Category[];

    public courses: Course[];

    public skills: Skill[];

    errorMessage: string = "";

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

        this.data.loadSkills()
            .subscribe(success => {
                if (success) {
                    this.skills = this.data.skills;
                }
            })
    }

    onCreateBasicRecipe(image, title, portion, skill, preptime, category, cooktime, course, rating, calorie, protein, carb, fat, satfat, fibre, sugar, salt, location) {

        this.data.CreateBasicRecipe(image, title, portion, skill, preptime, category, cooktime, course, rating, calorie, protein, carb, fat, satfat, fibre, sugar, salt, location)
            .subscribe(success => {
                if (success) {
                    //TODO Routing
                    //this.router.navigate(['/']);
                }
            }, err => this.errorMessage = "Failed to save basic recipe");
    }
}

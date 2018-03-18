import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Category } from '../shared/category';
import { Course } from '../shared/course';
import { Skill } from '../shared/skill';
import { Tag } from '../shared/tag';
import { AddRecipeCuisine } from '../recipe/addRecipeCuisine.component';
import { AddRecipeTag } from '../recipe/addRecipeTag.component';

@Component({
    selector: 'create-recipe',
    templateUrl: 'createRecipe.component.html',
    styleUrls: []
})

export class CreateRecipe implements OnInit {

    constructor(private data: DataService) { }

    public categories: Category[];

    public courses: Course[];

    public skills: Skill[];

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
}

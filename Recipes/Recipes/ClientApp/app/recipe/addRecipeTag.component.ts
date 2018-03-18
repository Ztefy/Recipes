import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Tag } from '../shared/tag';

@Component({
    selector: 'recipe-tag',
    templateUrl: 'addRecipeTag.component.html',
    styleUrls: []
})

export class AddRecipeTag implements OnInit {

    constructor(private data: DataService) { }

    public tags: Tag[];

    ngOnInit(): void {
        this.data.loadTags()
            .subscribe(success => {
                if (success) {
                    this.tags = this.data.tags;
                }
            })
    }

    addTag(tag: Tag) {
        this.data.TagAddToRecipe(tag);
    }
}
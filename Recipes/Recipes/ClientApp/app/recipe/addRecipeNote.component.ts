import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { RecipeNote } from '../shared/recipe';

@Component({
    selector: 'recipe-note',
    templateUrl: 'addRecipeNote.component.html',
    styleUrls: []
})

export class AddRecipeNote {

    constructor(private data: DataService) { }

    addNote(note: RecipeNote) {
        this.data.NoteAddToRecipe(note);
    }

    removeNote(note: RecipeNote) {
        this.data.NoteRemoveFromRecipe(note);
    }
}
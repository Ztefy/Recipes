import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './shared/dataService';

import { CreateRecipe } from './recipe/createRecipe.component';
import { AddRecipeCuisine } from './recipe/addRecipeCuisine.component';
import { AddRecipeTag } from './recipe/addRecipeTag.component';
import { AddRecipeNote } from './recipe/addRecipeNote.component';
import { AddRecipeMethod } from './recipe/addRecipeMethod.component';
import { AddRecipeIngredient } from './recipe/addRecipeIngredient.component';

import { CreateBasicRecipe } from './basic_recipe/createBasicRecipe.component';

let routes = [
    //{ path: "", component: Results },
    //{ path: "recipe", component: Recipe }
    //{ path: "", component: Recipe }
];

@NgModule({
  declarations: [
      AppComponent,
      CreateRecipe,
      AddRecipeCuisine,
      AddRecipeTag,
      AddRecipeNote,
      AddRecipeMethod,
      AddRecipeIngredient,
      CreateBasicRecipe
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })
  ],
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

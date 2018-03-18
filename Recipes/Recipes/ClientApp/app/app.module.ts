import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateRecipe } from './recipe/createRecipe.component';
import { AddRecipeCuisine } from './recipe/addRecipeCuisine.component';
import { AddRecipeTag } from './recipe/addRecipeTag.component';
import { DataService } from './shared/dataService';

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
      AddRecipeTag
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

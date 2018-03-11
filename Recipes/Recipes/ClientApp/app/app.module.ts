import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CreateRecipe } from './recipe/createRecipe.component';
import { DataService } from './shared/dataService';

import { RouterModule } from '@angular/router';

let routes = [
    //{ path: "", component: Results },
    //{ path: "recipe", component: Recipe }
    //{ path: "", component: Recipe }
];

@NgModule({
  declarations: [
      AppComponent,
      CreateRecipe
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ListComponent } from './recipe-book/list/list.component';
import { ItemComponent } from './recipe-book/item/item.component';
import { DetailComponent } from './recipe-book/detail/detail.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { ListEditComponent } from './shopping-list/list-edit/list-edit.component';
import { IngredientComponent } from './shopping-list/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    RecipeComponent,
    ListEditComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

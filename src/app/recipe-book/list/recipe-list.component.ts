import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('spaghetti', 'long slender noodles with tomato sauce', 'http://chaledapizza.com.br/wp-content/uploads/2016/07/SpaghettiaoSugo.jpg'),
    new Recipe('chicken alfredo', 'long flat noodles with grilled chicken in alfredo sauce', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Lori%27s_Diner_chicken_fettucine_alfredo.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}

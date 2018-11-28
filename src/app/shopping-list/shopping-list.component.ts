import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('salt', 40),
    new Ingredient('oregano', 23)
  ];

  constructor() { }

  ngOnInit() {
  }

  receiveIngredient(e) {
    console.log('hit');
    console.log(e);
    this.ingredients.push(e);
    console.log(this.ingredients);
  }

}

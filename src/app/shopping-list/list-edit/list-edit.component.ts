import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {

  @Output() sendIngredient = new EventEmitter<Ingredient>();

  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addItem(n:HTMLInputElement, a:HTMLInputElement) {
    console.log(n.value, a);
    this.ingredient = new Ingredient(n.value, +a.value)
    console.log(this.ingredient);
    this.sendIngredient.emit(this.ingredient);
  }

}

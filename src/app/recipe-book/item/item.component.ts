import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  dispatchRecipeEvent() {
    this.recipeEvent.emit();
  }
  
}

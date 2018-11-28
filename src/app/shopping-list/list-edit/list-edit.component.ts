import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})

export class ListEditComponent implements OnInit {

  @ViewChild('nameI') nameRef: ElementRef;
  @ViewChild('amountI') amountRef: ElementRef;
  @Output() sendIngredient = new EventEmitter<Ingredient>();

  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.ingredient = new Ingredient(
      this.nameRef.nativeElement.value, +this.amountRef.nativeElement.value
      )
    console.log(this.ingredient);
    this.sendIngredient.emit(this.ingredient);
  }

}

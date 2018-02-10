import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('pear', 3),
    new Ingredient('banana', 2)
  ];
  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}

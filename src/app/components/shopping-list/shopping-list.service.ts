import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('pear', 3),
    new Ingredient('banana', 2)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

}

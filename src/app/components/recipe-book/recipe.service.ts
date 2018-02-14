import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'egg',
    'yolk and white',
    'http://www.seriouseats.com/recipes/images/2017/08/5708631471_06fed03518_o-1500x1125.jpg',
    [
      new Ingredient('egg', 2),
      new Ingredient('egg white', 30)
    ]),
    new Recipe(
      'pork',
      'golden cripsy',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/22/0/BXSP04H_Spiced-Roast-Pork_s4x3.jpg.rend.hgtvcom.616.462.suffix/1449598951075.jpeg',
      [
        new Ingredient('pork', 4),
        new Ingredient('honey', 20)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}

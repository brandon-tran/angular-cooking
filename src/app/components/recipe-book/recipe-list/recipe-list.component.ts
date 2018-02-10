import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('egg', 'yolk and white', 'http://www.seriouseats.com/recipes/images/2017/08/5708631471_06fed03518_o-1500x1125.jpg'),
    new Recipe('pork', 'golden cripsy', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/22/0/BXSP04H_Spiced-Roast-Pork_s4x3.jpg.rend.hgtvcom.616.462.suffix/1449598951075.jpeg')
  ];

  @Output() recipeEvent2 = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  sendThisRecipe(recipe: Recipe) {
    this.recipeEvent2.emit(recipe);
  }

}

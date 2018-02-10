import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleRecipeOff() {
    this.recipeEvent.emit(false);
  }

  toggleRecipe() {
    this.recipeEvent.emit(true);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ask.com/wp-content/uploads/sites/3/2022/01/ee3067a747f21fba86392f6895cf6653.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.ask.com/wp-content/uploads/sites/3/2022/01/ee3067a747f21fba86392f6895cf6653.jpg')
  ];
    

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

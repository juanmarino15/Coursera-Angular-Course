import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ask.com/wp-content/uploads/sites/3/2022/01/ee3067a747f21fba86392f6895cf6653.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.ask.com/wp-content/uploads/sites/3/2022/01/ee3067a747f21fba86392f6895cf6653.jpg')
      ];

    getRecipes(){
        return this.recipes.slice(); //this will return a new array which is a copy of the file
    }
}
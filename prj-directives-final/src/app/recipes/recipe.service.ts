import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{


  private recipes: Recipe[] = [
    new Recipe(
      'A Salad ',
      'Super healthy Salad',
      'https://cdn.jamieoliver.com/recipe-database/430_575/55846349.jpg',
      [
        new Ingredient('Vegetables',100),
        new Ingredient('Bread Chuncks',100)
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Buns',1),
        new Ingredient('Test',1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}

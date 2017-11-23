import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simple test','https://www.gimmesomeoven.com/wp-content/uploads/2012/09/crispy-slow-cooker-carnitas-2.jpg')
    ,new Recipe('A test recipe', 'this is simple test','https://www.gimmesomeoven.com/wp-content/uploads/2012/09/crispy-slow-cooker-carnitas-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

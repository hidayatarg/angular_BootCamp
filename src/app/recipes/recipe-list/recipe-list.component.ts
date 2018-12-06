import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // empty array define type as Recipe as an arry form
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe',
    'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Other Recipe', 'This is two test recipe',
    'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];


  constructor() { }

  ngOnInit() {
    
    
  }

}

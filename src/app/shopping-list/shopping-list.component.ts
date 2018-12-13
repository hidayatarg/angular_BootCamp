import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // array of ingridents of type model ingredients
  // Creating ingredient
  ingredients: Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 5)
  ];

  
  
  constructor() { }

  ngOnInit() {
  }

}

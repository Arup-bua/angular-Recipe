import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


 recipes: Recipe[] = [new Recipe('A test recipe','a simply test recipe','https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2012/11/Basic-mince-recipe-1220x803.jpg'),
 new Recipe('A test recipe','a simply test recipe','https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2012/11/Basic-mince-recipe-1220x803.jpg') ];
 


  ngOnInit() {
  
  }
  

}



  

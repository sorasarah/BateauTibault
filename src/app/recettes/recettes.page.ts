import { NavigationExtras, Router } from '@angular/router';
import { Recipes } from './../models/recipes';
import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../services/recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recipesList!: Recipes[];

  constructor(private router: Router, private recipesService: RecettesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(res => {
      this.recipesList = res;
    },
    err => {
      console.log("recipes error")
    })
  }

  onLoadRecipes(recipe : {id: number, title: string, ingredients: string[]}){
    let navigationExtras : NavigationExtras = {
      state : {
        recipe : recipe
      }
    };
    this.router.navigate(['single-recette'], navigationExtras)
  }

}

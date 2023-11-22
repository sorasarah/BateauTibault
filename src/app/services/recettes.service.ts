import { Injectable } from '@angular/core';
import { Recipes } from '../models/recipes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  recipesList!: Recipes[];

  constructor(private http: HttpClient) { }

  getRecipes(){
    return this.http.get<Recipes[]>('assets/data/recipes.json')
  }
}

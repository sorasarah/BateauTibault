import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  productsList!: Produits[];

  constructor(private http: HttpClient) { }

  getProducst(){
    return this.http.get<Produits[]>('assets/data/produits.json')
  }
}

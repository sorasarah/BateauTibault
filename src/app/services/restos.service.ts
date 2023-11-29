import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resto } from '../models/resto';

@Injectable({
  providedIn: 'root'
})
export class RestosService {
  restaurantsList!: Resto[];

  constructor(private http: HttpClient) {}
    getRestos (){
      return this.http.get<Resto[]>('assets/data/resto.json')    }

}

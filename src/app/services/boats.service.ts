import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  boatsList!: Boat[];

  constructor(private http: HttpClient) { }

  getBoats(){
    return this.http.get<Boat[]>('assets/data/bateaux.json')
  }
}

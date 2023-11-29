import { BoatsService } from './../services/boats.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  boatsList!: Boat[];

  constructor(private router: Router, private boatsService: BoatsService) { }

  ngOnInit() {
    this.boatsService.getBoats().subscribe(res => {
      this.boatsList = res;
    },
    error => {
      console.log("boats error")
    }) 
  }

  onLoadBoats(boat : {id: number, name: string}){
    let navigationExtras: NavigationExtras = {
      state: {
        boat : boat
      }
    };
    let pageName = boat.name;
    this.router.navigate(['single-boat-page'], navigationExtras);
  }

}

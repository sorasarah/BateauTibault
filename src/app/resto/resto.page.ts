import { Resto } from './../models/resto';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RestosService } from '../services/restos.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.page.html',
  styleUrls: ['./resto.page.scss'],
})
export class RestoPage {
  restaurantsList!: Resto[] ; // Tableau pour stocker les restaurants

  constructor(private router: Router, private restoService: RestosService ) {
  }

  ngOnInit(){
   this.restoService.getRestos().subscribe(res => {
    this.restaurantsList = res;
   }, error =>{
    console.log("Resto error")
   })

  }

  onLoadRestos(resto: {id:number, name:string}){
    let navigationextras: NavigationExtras = {
      state: {
        resto : resto
      }
    };
    this.router.navigate(['singleresto'], navigationextras);

  }




  // loadRestaurants() {
  //   this.http.get<any[]>('../../assets/data/resto.json') // Chemin vers le fichier JSON
  //     .subscribe(data => {
  //       this.restaurants = data;
  //     });
  // }

  // onButtonClicked(buttonNumber: number) {
  //   const selectedRestaurant = this.restaurants.find(restaurant => restaurant.id === buttonNumber);
  //   if (selectedRestaurant) {
  //     console.log('Restaurant sélectionné :', selectedRestaurant);
  //     // Ajout ici de la logique pour naviguer vers la page ou effectuer une action spécifique avec le restaurant sélectionné
  //   }
  // }
}

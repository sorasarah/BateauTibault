import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.page.html',
  styleUrls: ['./resto.page.scss'],
})
export class RestoPage {
  restaurants: any[] = []; // Tableau pour stocker les restaurants

  constructor(private http: HttpClient) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.http.get<any[]>('../../assets/resto.json') // Chemin vers le fichier JSON
      .subscribe(data => {
        this.restaurants = data;
      });
  }

  onButtonClicked(buttonNumber: number) {
    const selectedRestaurant = this.restaurants.find(restaurant => restaurant.id === buttonNumber);
    if (selectedRestaurant) {
      console.log('Restaurant sélectionné :', selectedRestaurant);
      // Ajout ici de la logique pour naviguer vers la page ou effectuer une action spécifique avec le restaurant sélectionné
    }
  }
}

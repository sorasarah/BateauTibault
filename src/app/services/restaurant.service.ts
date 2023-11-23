import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  restaurant = {
    name: 'Bateau Tibault',
    phoneNumber: '06.63.99.78',
    email: 'labateauthibault@gmail.com',
    facebook:"facebook.com/lebateauthibault"
  };

  getRestaurantInfo() {
    return this.restaurant;
  }
}

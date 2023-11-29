import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public restaurantInfo: any; 

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    if (this.restaurantService) {
      this.restaurantInfo = this.restaurantService.getRestaurantInfo();
    } else {
      console.error('Restaurant service is undefined.');
    }
  }
}

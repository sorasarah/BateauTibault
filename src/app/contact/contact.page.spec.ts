import { RestaurantService } from '../services/restaurant.service';

// ...

export class ContactPage {
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-single-boat-page',
  templateUrl: './single-boat-page.page.html',
  styleUrls: ['./single-boat-page.page.scss'],
})
export class SingleBoatPagePage implements OnInit {

  boat!: {
    id: number,
    name: string,
    owner: string,
    description: string,
    img: string
  };

  constructor(private route:ActivatedRoute,  private router: Router, private navCtrl: NavController) { }
  // constructor(private route:ActivatedRoute,  private router: Router, private navCtrl: NavController, private boatsService : BoatsService) { }
  
  ngOnInit() {
    // this.boatsList = this.boatsService.boatsList.slice();
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.boat = this.router.getCurrentNavigation()?.extras.state?.['boat'];
        console.log(this.boat)
      }
    })
  }

}

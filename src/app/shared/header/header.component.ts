import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  navigateToHome(route: string) {
    this.router.navigate(['/home']); 
    }
  navigateToProduct(route: string) {
  this.router.navigate(['/produits']); 
  }
  navigateToBoat(route: string) {
    this.router.navigate(['/bateaux']); 
  }
  navigateToResto(route: string) {
    this.router.navigate(['/resto']); 
  }
  navigateToRecette(route: string) {
    this.router.navigate(['/recettes']); 
  }
  navigateToContact(route: string) {
    this.router.navigate(['/contact']); 
  }
  
  // this.router.navigate(['/bateaux']);
  // this.router.navigate(['/resto']);
  // this.router.navigate(['/recettes']);
  //this.router.navigate(['/contact']);



}

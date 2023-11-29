import { Component, OnInit } from '@angular/core';
import { Produits } from '../models/produits';
import { Router, NavigationExtras } from '@angular/router';
import { ProduitsService } from '../services/produits.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  productsList!: Produits[];

  constructor(private router: Router, private productsService: ProduitsService, private alertController: AlertController) { }

  ngOnInit() {
    this.productsService.getProducst().subscribe(res => {
      this.productsList = res;
    },
    error => {
      console.log("product error")
    })
  }

  async onLoadProducts(product : {id: number, name: string, category: number, price: number, sale: boolean, availability: boolean, discount: number }){
    if( product.availability){
      let navigationExtras : NavigationExtras = {
        state : {
          product : product
        }
      };
      this.router.navigate(['single-produit'], navigationExtras)
    }else {
      console.log("Le produit n'est plus disponible")
      await this.presentAlert("Le produit n'est plus disponible");
    }
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

}

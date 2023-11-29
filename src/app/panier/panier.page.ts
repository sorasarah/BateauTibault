import { Panier } from './../models/panier';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Produits } from '../models/produits';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  panier: CartItem[] = [];
  constructor(private Storage: StorageService) { }


  async ngOnInit() {
    const arrayLength = await this.Storage.getArrayLength('panier');
    console.log('Length of panier:', arrayLength);

    // this.panier = await this.Storage.get('panier');
    // console.log(this.panier);
    // Use the StorageService to get the cart data
    const panierData = await this.Storage.get('panier');

    if (panierData) {
      // Extract produitsData from the panierData
      console.log(panierData);
      this.panier = panierData;
    } 

  }
}

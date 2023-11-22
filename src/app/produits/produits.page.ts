import { Component, OnInit } from '@angular/core';
import { Produits } from '../models/produits';
import { Router, NavigationExtras } from '@angular/router';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  productsList!: Produits[];

  constructor(private router: Router, private productsService: ProduitsService) { }

  ngOnInit() {
    this.productsService.getProducst().subscribe(res => {
      this.productsList = res;
    },
    error => {
      console.log("product error")
    })
  }

  onLoadProducts(product : {id: number, name: string, category: number, price: number, sale: boolean, availability: boolean, discount: number }){
    if( product.availability){
      let navigationExtras : NavigationExtras = {
        state : {
          product : product
        }
      };
      this.router.navigate(['single-produit'], navigationExtras)
    }else {
      console.log("Le produit n'est plus disponible")
      alert("Le produit n'est plus disponible")
    }

  }

}

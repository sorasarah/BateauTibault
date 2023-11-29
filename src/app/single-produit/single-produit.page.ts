import { PanierService } from './../services/panier.service';
import { Produits } from './../models/produits';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.page.html',
  styleUrls: ['./single-produit.page.scss'],
})

export class SingleProduitPage implements OnInit {


  product!: {
    id: number,
    name: string,
    img: string,
    category: number,
    price: number,
    sale: boolean,
    availability: boolean,
    discount: number,
    owner: string,
    comments: string,
    ownerPicture : string,
    unit : string,
    quantity: number,
    in_panier: number
  }

  count:number = 1



  constructor(private route: ActivatedRoute,
              private router: Router,
              private panierService: PanierService) {  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.product = this.router.getCurrentNavigation()?.extras.state?.['product'];
        console.log(this.product)
      }
      this.product.quantity = 0
    })
  }
  addQuantity() {
    this.count++
  }

  removeQuantity() {
    this.count--;
  }

  ajoutAuPanier(product: {
    id: number,
    name: string,
    img: string,
    category: number,
    price: number,
    sale: boolean,
    availability: boolean,
    discount: number,
    owner: string,
    comments: string,
    ownerPicture : string,
    unit : string,
    quantity: number
    in_panier: number
  }) {
    this.panierService.addToCart(product, this.count);
  }

  }

  // decrementQuantity(){
  //   if(this.product && this.product.quantity > 0){
  //     this.product.quantity--
  //   }
  // }





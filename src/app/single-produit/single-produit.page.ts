import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

  constructor(private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.product = this.router.getCurrentNavigation()?.extras.state?.['product'];
        console.log(this.product)
      }
    })
  }

}

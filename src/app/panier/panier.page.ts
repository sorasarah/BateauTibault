import { Panier } from './../models/panier';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  panier = []
  constructor(private Storage: StorageService) {}


  async ngOnInit() {
    this.panier = await this.Storage.get('panier');
    console.log(this.panier);

  }

}

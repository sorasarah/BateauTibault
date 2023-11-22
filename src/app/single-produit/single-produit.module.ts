import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleProduitPageRoutingModule } from './single-produit-routing.module';

import { SingleProduitPage } from './single-produit.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SingleProduitPageRoutingModule
  ],
  declarations: [SingleProduitPage]
})
export class SingleProduitPageModule {}

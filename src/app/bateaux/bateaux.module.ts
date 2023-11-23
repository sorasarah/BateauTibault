import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BateauxPage } from './bateaux.page';
import { BateauxPageRoutingModule } from './bateaux-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule
  ],
  declarations: [BateauxPage]
})
export class BateauxPageModule {}

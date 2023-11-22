import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoPageRoutingModule } from './resto-routing.module';

import { RestoPage } from './resto.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RestoPageRoutingModule
  ],
  declarations: [RestoPage]
})
export class RestoPageModule {}

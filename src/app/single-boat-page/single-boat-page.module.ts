import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SingleBoatPagePage } from './single-boat-page.page';
import { SingleBoatPagePageRoutingModule } from './single-boat-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBoatPagePageRoutingModule
  ],
  declarations: [SingleBoatPagePage]
})
export class SingleBoatPagePageModule {}

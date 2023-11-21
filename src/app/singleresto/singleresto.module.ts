import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglerestoPageRoutingModule } from './singleresto-routing.module';

import { SinglerestoPage } from './singleresto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglerestoPageRoutingModule
  ],
  declarations: [SinglerestoPage]
})
export class SinglerestoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterTabComponent } from './footer-tab/footer-tab.component';



@NgModule({
  declarations: [HeaderComponent,FooterTabComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,FooterTabComponent]
})
export class SharedModule { }

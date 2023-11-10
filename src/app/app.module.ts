import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importez IonicModule ici

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component'; // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [AppComponent, FooterComponent], // Ajoutez FooterComponent ici
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}

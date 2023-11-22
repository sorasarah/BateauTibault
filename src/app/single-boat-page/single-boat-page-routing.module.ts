import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleBoatPagePage } from './single-boat-page.page';

const routes: Routes = [
  {
    path: '',
    component: SingleBoatPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBoatPagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglerestoPage } from './singleresto.page';

const routes: Routes = [
  {
    path: '',
    component: SinglerestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglerestoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resto',
    loadChildren: () => import('./resto/resto.module').then( m => m.RestoPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'singleresto',
    loadChildren: () => import('./singleresto/singleresto.module').then( m => m.SinglerestoPageModule)
  },
  {
    path: 'single-boat-page',
    loadChildren: () => import('./single-boat-page/single-boat-page.module').then( m => m.SingleBoatPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




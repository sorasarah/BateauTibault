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
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'single-boat-page',
    loadChildren: () => import('./single-boat-page/single-boat-page.module').then( m => m.SingleBoatPagePageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'single-recette',
    loadChildren: () => import('./single-recette/single-recette.module').then( m => m.SingleRecettePageModule)
  },
  {
    path: 'single-produit',
    loadChildren: () => import('./single-produit/single-produit.module').then( m => m.SingleProduitPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Panier } from './../models/panier';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

// local variables
private serverUrl = environment;
private panierDataArray : Panier = {
  count : 0,
  produitsData : []
}

private panierData$ = new BehaviorSubject<Panier>({count:0, produitsData:[]});
private totalAmount = 0;
private totalAmount$ = new BehaviorSubject<number>(0)

  constructor(private httpClient :HttpClient,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private toastController: ToastController,
              private storage: Storage,
              private router: Router) {
        this.totalAmount=0;
        this.storage.get('panier').then(data =>{
          if (data){
            this.panierDataArray= data;
            this.panierData$.next(this.panierDataArray);
            // pour calculer le total
          }
        });
    }

    get panierData(): Observable<Panier>{
      return this.panierData$.asObservable();
    }

    async ajoutAuPanier(produits: Produits){
      const loader = await this.loadingController.create({
        message: 'Ajouter au panier',
        animated: true,
        spinner: "circles",
        backdropDismiss: false,
        showBackdrop: true
      });

      const alert = await this.alertController.create({
        header: 'Panier mis à jour',
        buttons:[
          {
            text: 'Continuer',
            role: 'Annuler',
            cssClass: 'continue',
            handler: ()=>{
              console.log('Produit Ajouté')
            }
          },
          {
            text: "Voir Panier",
            cssClass: 'voir-panier',
            handler: ()=>{
              this.router.navigateByUrl('/tabs/tab3').then();
            }
          }
        ],
        animated: true,
        message: "Produit ajouté au Panier",
        backdropDismiss: false,
        cssClass: "ajout-produit"
      });

      const toast = await this.toastController.create({
        message: 'un maximum de 5 sont autorisés',
        header: 'Quantité maximale atteinte',
        duration: 2000,
        position: "bottom",
        animated: true,
        color: "warning",
        buttons: [
          {
            side: "end",
            role: "cancel",
            text: "Ok"
          }
        ]
      });

      await loader.present().then();

      // qd le panier n'est pas complètement vide

      if (this.panierDataArray.count!== 0) {

        // Calculate Index
        const index = this.panierDataArray.produitsData.findIndex(p => p.id === produits.id);

        // If there is a match, that means the index is not equal to -1

        if (index > -1) {

            // Limiter l'achat à 5 unité par commande
            if (this.panierDataArray.produitsData[index].in_panier >= 5) {
                this.panierDataArray.produitsData[index].in_panier = 5;
                //TODO Calculate Total
                this.storage.set('panier', {...this.panierDataArray}).then();
                await loader.dismiss().then();
                await toast.present().then();
            } else {
                this.panierDataArray.produitsData[index].in_panier += 1;
                //TODO Calculate Total
                this.storage.set('panier', {...this.panierDataArray}).then();
                await loader.dismiss().then();
                await alert.present().then();
            }
            this.panierData$.next(this.panierDataArray);

        }

        // When the produits is not in panier array but the panier is not empty
        else {
            this.panierDataArray.produitsData.push(produits);
            const newproduitsIndex = this.panierDataArray.produitsData.findIndex(p => p.id === produits.id);
            this.panierDataArray.produitsData[newproduitsIndex].in_panier = 1;
            // TODO Calculate Total
            await loader.dismiss().then();
            await alert.present().then();
            this.panierDataArray.count = this.panierDataArray.produitsData.length;
            this.storage.set('panier', {...this.panierDataArray}).then();
            this.panierData$.next(this.panierDataArray);
        }

    }

    // When the panier is absolutely empty
    else {
        this.panierDataArray.produitsData.push({...produits, in_panier: 1});
        this.panierDataArray.count = this.panierDataArray.produitsData.length;
        // TODO Calculate Total
        this.storage.set('panier', {...this.panierDataArray}).then();
        await loader.dismiss().then();
        await alert.present().then();
        this.panierData$.next(this.panierDataArray);
    }

}


}




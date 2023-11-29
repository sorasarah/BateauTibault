import { Produits } from "./produits";
// import { count } from "console";

export interface Panier {
  count : number;
  produitsData : Produits[]; 
}

export class Produits {
  id: number;
  name: string;
  category: number;
  price: number;
  availability: boolean;
  sale: boolean;
  discount: number;
  comments!: string;
  owner!: string;
  ownerPicture!: string;
  img!: string;
  unit: string;
  in_panier!: number;
  quantity!: number;

  constructor(id: number, name: string, category: number, price: number, availability: boolean, sale: boolean, discount: number, unit: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.availability = availability;
    this.sale = sale;
    this.discount = discount;
    this.unit = unit;

  }
}

export class Recipes{
    id: number;
    title: string;
    ingredients: string[];
    preparation!: string;
    img!: string;

    constructor(id: number, title: string, ingredients: string[]){
        this.id = id;
        this.title = title;
        this.ingredients = ingredients
    }

}
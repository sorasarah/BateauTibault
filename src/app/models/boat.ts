export class Boat{
    id: number;
    name: string;
    description!: string;
    owner!: string;
    img!: string

    constructor(id: number, name: string){
        this.name = name;
        this.id = id
    }
}
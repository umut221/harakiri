import { Product } from './product';
export class Cart{

    id:string;
    userId:string;
    cartItems:Product[];

    constructor(id:string,userId:string,cartItems:Product[]){
        this.id = id;
        this.userId = userId;
        this.cartItems = cartItems;
    }

}
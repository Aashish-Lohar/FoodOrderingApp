import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[]=[];
    totalCount:number=0;
    private _totalPrice=0;
    get totalPrice():number{
        this._totalPrice=0;
        this.items.forEach(item=>{
            this._totalPrice += item.price
        })
        return this._totalPrice;
    }
    set totalPrice(tp){
        this._totalPrice=tp      
    }
}
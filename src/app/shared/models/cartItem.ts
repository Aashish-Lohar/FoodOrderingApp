import { Foods } from "./food";

export class CartItem{
  constructor(public food:Foods){
    this.food=food;
  }
  quantity:number = 1 ;
  _price:number=0
  get price():number{
    return this.food.price*this.quantity;
  }
  set price(p){
    this._price=p;
  }
  
}
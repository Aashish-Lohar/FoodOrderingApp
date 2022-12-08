import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http:HttpClient,
    private loader:NgxUiLoaderService) {}
  cart:Cart=this.getLocalStorage();
  foodList:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);
  sum:number=0;
  // new try for better approach
  addToCart(food:Foods){
    let cartItem=this.cart.items.find(item=>item.food.id==food.id);
    if(cartItem){
      return;
    }
    else{
      this.cart.items.push(new CartItem(food));
    }
    this.setLocalStorage();
  }
// new try for better approach
  removeFromCart(index:number){
    this.cart.items.splice(index,1)
    this.setLocalStorage();
  }
    getCart(){
      return this.cart;
    }
    changeQuantity(foodId:number,quantity:number){
      let cartItem=this.cart.items.find(item=>item.food.id==foodId);
      if(!cartItem)return;
      
      cartItem.quantity=quantity;
      cartItem.price=quantity*cartItem.food.price;

      this.setLocalStorage();
    }
    clearCart(){
      this.cart=new Cart();
      this.setLocalStorage();
    }
    getCartObservable():Observable<Cart>{
      return this.foodList.asObservable();
    }

    private setLocalStorage(){
      this.cart.totalPrice=this.cart.items
      .reduce((prevSum, currentItem)=>prevSum + currentItem.price,0)
      this.cart.totalCount=this.cart.items
      .reduce((prevSum, currentItem)=>prevSum + currentItem.quantity,0)
      const cartJson=JSON.stringify(this.cart);
      localStorage.setItem('Cart',cartJson);
      this.foodList.next(this.cart);
    }

    private getLocalStorage():Cart{
      const cartJson=localStorage.getItem('Cart');
      return cartJson?JSON.parse(cartJson):new Cart();
    }

}

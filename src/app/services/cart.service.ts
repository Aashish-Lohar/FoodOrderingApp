import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../shared/models/cartItem';
import { Foods } from '../shared/models/food';
import { MainCart } from '../shared/models/mainCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  cart:CartItem[]=[];
  sum:number=0;
  addToCart(food:Foods){
    if( this.cart.find(item=>item.food.name==food.name))
    {
      this.cart.map(item=>{
        if(item.food.name==food.name)
      {
        item.quantity+=1;
      }
    });
    }
    else{
      this.cart.push(new CartItem(food));
      console.log("inservice",this.cart)
    }
    }

    getCart(){
      return this.cart;
    }

    changeQuantity(food:CartItem,qty:string){
      if(qty=='minus' && food.quantity>1){
        food.quantity-=1
      }
      else if(qty=='plus'){
        food.quantity+=1
      }
    }

    totalPrice(){
      this.sum=0;
      this.cart.map(item=> this.sum+=item.price);
      return this.sum;
    }

    addToDB(){
      const cartData={
        cartItem:this.cart,
        token:localStorage.getItem('token')
      } 
      return this.http.post('http://localhost:3000/addToCart',cartData)
    }

    removeFromCart(index:number){
      this.cart.splice(index,1)
    }



}

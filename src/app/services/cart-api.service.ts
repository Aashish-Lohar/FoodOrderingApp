import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  public cartItemList:any[]=[];
  public foodList=new BehaviorSubject<any>([]);
  constructor() { }

  getFood(){
    return this.foodList.asObservable();
  }

  setFood(food:any){
    console.log('hello')
    this.cartItemList.push(...food);
    this.foodList.next(food);
  }

  addToCart(food:any){
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice();
    console.log('cartItemList',this.cartItemList);
    console.log('foodlist',this.foodList);
    
  }
  getTotalPrice(){
    console.log('in total')
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.price;
    })
    console.log('in total price',grandTotal);
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
}

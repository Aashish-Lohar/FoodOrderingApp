import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { FoodService } from '../services/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!:Cart;
  sum:number=0;
  constructor(
    private cs:CartService, 
) {
      this.cs.getCartObservable().subscribe((cart)=>{
        this.cart=cart;
        console.log('carrrrrt',this.cart);
      })
     }
  ngOnInit(): void {
  }

  removeFromCart(index:number){
    this.cs.removeFromCart(index)
  }

  changeQty(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cs.changeQuantity(cartItem.food.id,quantity);
  }

}

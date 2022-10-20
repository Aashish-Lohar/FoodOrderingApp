import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { FoodService } from '../services/food.service';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cs:CartService, private fs:FoodService, private ds:DataService) { }
  items!:CartItem[];
  sum:number=0;
  ngOnInit(): void {
    // this.cartItemToDB();
    this.loadCart()
  }
  changeQty(item:CartItem,qty:string){
    this.cs.changeQuantity(item,qty)
    this.sum=this.cs.totalPrice();
    this.cartItemToDB();
  }
  removeFromCart(index:number){
    this.cs.removeFromCart(index)
    this.sum=this.cs.totalPrice();
    this.cartItemToDB();
  }
  addToFav(id:number){
    // console.log('fav id',id)
    this.fs.addToFav(id)
  }
  loadCart(){
    this.items= this.ds.isAuth()? this.cs.getCart():[]
    this.items.map(item=> this.sum+=item.food.price*item.quantity);
  }
  cartItemToDB(){
    if(this.ds.isAuth()){//cart item added to db if user is logged in 
          this.cs.addToDB().subscribe((cartResp)=>{
            // console.log("cartResp",cartResp),
            (err:any)=>console.log(err)
          })
        }
      }

      

}

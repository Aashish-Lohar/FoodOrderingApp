import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cs:CartService) { }
  cartContent:number=0;
  ngOnInit(): void {
  // this.cs.getCart().map(item=>{
  //     this.cartContent+=item.quantity;
  //   });
  //   console.log('cart number',this.cartContent);
  }

  ngDoCheck(){
    this.cartContent=0;
    this.cs.getCart().map(item=>{
      this.cartContent+=item.quantity;
    });
    console.log('cart number',this.cartContent);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cs:CartService,private router:Router, private ds:DataService) { }
  cartContent:number=0;

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.cartContent=0;
    if(this.ds.isAuth()){
      this.cs.getCart().map(item=>{
        this.cartContent+=item.quantity;
      });

    }
    // console.log('cart number',this.cartContent);
    
  }

  logOut(){
    localStorage.removeItem('token');
    // localStorage.removeItem('item');
    this.router.navigate(['/home'])
  }

  isAuth(){
    return this.ds.isAuth();
  }

}

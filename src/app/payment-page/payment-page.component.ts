import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/models/order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  order:Order = new Order();
  constructor(private orderService:OrderService, private router:Router) {
    orderService.getNewOrderFromCurrentUser().subscribe({
      next:(order)=>{
        this.order = order; 
      },
      error:(err)=>{
        router.navigate(['/checkout']);
      }
    })
   }

  ngOnInit(): void {
  }

}

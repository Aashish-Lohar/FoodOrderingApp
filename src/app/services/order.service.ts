import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    console.log("order service", order);
    
    return this.http.post<Order>('http://localhost:3000/orders/create',order);
  }
  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>('http://localhost:3000/orders/newOrderFromCurrentUser');
  }
}
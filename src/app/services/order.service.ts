import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  create(order:Order){
    console.log("order service", order);
    
    return this.http.post<Order>('https://food-ordering-backend-8sd0.onrender.com/orders/create',order);
  }
  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>('https://food-ordering-backend-8sd0.onrender.com/orders/newOrderFromCurrentUser');
  }

  pay(order:Order):Observable<string>{
    return this.http.post<string>('https://food-ordering-backend-8sd0.onrender.com/pay',order);
  }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>('https://food-ordering-backend-8sd0.onrender.com/orders');
  }

}

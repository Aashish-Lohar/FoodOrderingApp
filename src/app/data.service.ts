import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private router:Router) { }
  onLogin(email:string,password:string){
    console.log("email password",email,password)
    this.http.get(`http://localhost:3000/users/${email}`).subscribe((item)=>{
      console.log("item",item)
     });
  }
  onRegister(user:Object){
    console.log('user',user)
     this.http.post('http://localhost:3000/users',user).subscribe((item)=>{
      console.log("item",item);
      this.router.navigate(['/home'])
     });
  }
}

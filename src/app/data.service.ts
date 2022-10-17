import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private router:Router) { }


  onLogin(loginForm:Object):Observable<any>{
    // console.log("email password",loginForm)
    return this.http.post(`http://localhost:3000/login`,loginForm);
  }


  onRegister(user:Object):Observable<any>{
    // console.log('user',user)
     return this.http.post('http://localhost:3000/register',user)
  }

  getProfile():Observable<any>{
    let headers={
      'Authorization':"Bearer " + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:3000/profile',{headers:headers});
  }
   
}

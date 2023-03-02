import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,
              private router:Router) { }

  loggedIn:boolean=false;


  // login function 
  onLogin(loginForm:Object):Observable<any>{
    return this.http.post(`https://food-ordering-backend-8sd0.onrender.com/login`,loginForm);
  }


  // register function 
  onRegister(user:Object):Observable<any>{
     return this.http.post('https://food-ordering-backend-8sd0.onrender.com/register',user)
  }

  // user profile function 
  getProfile():Observable<any>{
    let headers={
      'Authorization':"Bearer " + localStorage.getItem('token')
    }
    return this.http.get('https://food-ordering-backend-8sd0.onrender.com/profile',{headers:headers});
  }

  // check user is loggedin 
  isAuth(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

   
}

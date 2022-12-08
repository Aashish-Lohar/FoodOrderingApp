import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/models/IUserLogin';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userKey:string='user';
  private userSubject = new BehaviorSubject<User>(this.getUserLocalStorage());
  public userObservable:Observable<User>;
  constructor( 
    private http:HttpClient,
    private toastr:ToastrService
    ) {
    this.userObservable = this.userSubject.asObservable();
   }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>("http://localhost:3000/users/login",userLogin).pipe(
      tap({
        next:(user)=>{
          console.log("in tap", user)
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(
            `Welcome to Gorana Food Corner`,
            `Login Successful ${user.name}`
          )
        },
        error:(err)=>{
          this.toastr.error(err.error,`Login failed`);
        }
      }
    ));
   }

   logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(this.userKey);
    window.location.reload();
   }

  private setUserLocalStorage(user:User){
    localStorage.setItem(this.userKey,JSON.stringify(user));
  }

  private getUserLocalStorage(){
    const userJson=localStorage.getItem(this.userKey);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}

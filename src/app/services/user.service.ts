import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/models/IUserLogin';
import { IUserRegister } from '../shared/models/IUserRegister';
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

   public get currentUser():User{
    return this.userSubject.value;
   }

   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>("https://food-ordering-backend-8sd0.onrender.com/users/login",userLogin).pipe(
      tap({
        next:(user)=>{
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(
            `Welcome to Gorana Food House`,
            `Login Successful ${user.firstName}`
          )
          // window.location.reload();
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
    localStorage.removeItem('Cart');
    window.location.reload();
   }

   register(userRegister:IUserRegister):Observable<User>{
    console.log("userRegister",userRegister);
    
    return this.http.post<User>("https://food-ordering-backend-8sd0.onrender.com/users/register",userRegister).pipe(
      tap({
        next:(user)=>{
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(
            `Welcome to Gorana Food Corner ${user.firstName}`,
            'Register Successfull'
          )
        },
        error:(err)=>{
          this.toastr.error(err.error,'Registration Failed');
        }
      })
    );
   }

  private setUserLocalStorage(user:User){
    console.log("setUserLocalStorage",user)
    localStorage.setItem(this.userKey,JSON.stringify(user));
  }

  private getUserLocalStorage(){
    const userJson=localStorage.getItem(this.userKey);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}

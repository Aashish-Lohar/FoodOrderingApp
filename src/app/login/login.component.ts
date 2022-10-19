import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLogin!:FormGroup;
  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.myLogin=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  onSubmit(){
    // console.log(this.myLogin)
    this.data.onLogin(this.myLogin.value).subscribe((item)=>{
      // console.log("item",item)
      if(item.success){
        alert(item.success);
        localStorage.setItem("token",item.token);
        this.data.isAuth()
        this.router.navigate(['/home']);
      }
      else{
        alert(item.message);
      }
     },
     (err)=>{
      alert(err)
     });
  }

}

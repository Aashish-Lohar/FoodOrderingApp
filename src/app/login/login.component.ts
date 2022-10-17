import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLogin!:FormGroup;
  constructor(private data:DataService) { }

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
        console.log("item",item)
      }
      else{
        alert(item.message);
      }
     },
     err=>{
      alert("Login failed")
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLogin!:FormGroup;
  constructor(
    private data:DataService, 
    private router:Router,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    this.myLogin=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  onSubmit(){
    console.log('this.myLogin.value',this.myLogin.value)
    this.userService.login(this.myLogin.value).subscribe((user)=>{
      console.log("response",user);
      this.router.navigate(['/home']);
    })
  }

}

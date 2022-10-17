import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states:string[] = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
  constructor(private data:DataService) { }
  myRegister!:FormGroup;
  ngOnInit(): void {
    this.myRegister=new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
      houseNumber:new FormControl('',[Validators.required]),
      streetArea:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    // console.log('confirm',this.myRegister.value);
    this.data.onRegister(this.myRegister.value);
  }

}

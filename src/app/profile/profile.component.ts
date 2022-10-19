import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private data:DataService) { }
  userData:any={};
  ngOnInit(): void {
    this.getProfile();
  }
  
  getProfile(){
    this.data.getProfile().subscribe((result)=>{
      if(result.success){
        this.userData= result.data;
        console.log('data',this.userData);
      }
    })
  }
}

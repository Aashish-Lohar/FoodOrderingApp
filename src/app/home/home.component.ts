import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fs:FoodService,
              private route:ActivatedRoute,
              private cs:CartService,
              private ds:DataService) { }
  food:any[]=[];
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem']){
        this.food=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if(params['tag']){
        this.food=this.fs.getAllFoodByTag(params['tag']);
      }
      else{    this.food=this.fs.getAll()}
    })

    // update cart from database 
    this.ds.getProfile().subscribe((result)=>{
      if(result.success){
        this.cs.cart=result.data.cart;
      }
    })

  }


  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}

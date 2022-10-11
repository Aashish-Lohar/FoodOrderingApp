import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fs:FoodService, private route:ActivatedRoute) { }
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


  }


  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}

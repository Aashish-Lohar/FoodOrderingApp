import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private route:ActivatedRoute) { }
  Food:Foods[]=[
    {
      id:1,
      price:15,
      name:'Pizza Pepperini',
      favorite:false,
      star:4.5,
      tags:['Pizza','Lunch'],
      imageUrl:'/assets/food-1.jpg',
      cookTime:'10-20',
      origins:['Italy']
    },
    {
      id:2,
      price:10,
      name:'Meat Ball',
      favorite:true,
      star:4.5,
      tags:['Fast Food','Lunch'],
      imageUrl:'/assets/food-2.jpg',
      cookTime:'10-20',
      origins:['USA']
    },
    {
      id:3,
      price:20,
      name:'Burger',
      favorite:false,
      star:2.5,
      tags:['Fast Food','Burger','Lunch'],
      imageUrl:'/assets/food-3.jpg',
      cookTime:'20-30',
      origins:['America']
    },
    {
      id:4,
      price:10,
      name:'French Fries',
      favorite:false,
      star:4.5,
      tags:['Fast Food','Fries','Lunch'],
      imageUrl:'/assets/food-4.jpg',
      cookTime:'10-20',
      origins:['France']
    },
    {
      id:5,
      price:10,
      name:'Vegetable Soup',
      favorite:false,
      star:4.5,
      tags:['Fast Food','Soup','Lunch'],
      imageUrl:'/assets/food-5.jpg',
      cookTime:'10-20',
      origins:['Italy']
    },
    {
      id:6,
      price:15,
      name:'Thin Crust Pizza',
      favorite:false,
      star:4.5,
      tags:['Fast Food','Pizza','Lunch'],
      imageUrl:'/assets/food-6.jpg',
      cookTime:'10-20',
      origins:['Italy']
    },
    {
      id:7,
      price:20,
      name:'Double Decker Burger',
      favorite:false,
      star:4.5,
      tags:['Fast Food','Pizza','Lunch'],
      imageUrl:'/assets/food-7.jpg',
      cookTime:'10-20',
      origins:['Italy']
    },
    {
      id:8,
      price:10,
      name:'Vegi Pizza',
      favorite:false,
      star:4.5,
      tags:['Fast Food','Pizza','Lunch'],
      imageUrl:'/assets/food-8.jpg',
      cookTime:'10-20',
      origins:['Italy']
    }
  ]
  getAllTag(){
    return [
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Hamburger',count:1},
      {name:'Fry',count:1},
      {name:'Soup',count:1}

    ]
  }

  getAll():Foods[] {
    return this.Food;
  }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodByTag(tag:string):Foods[]{
    return tag=='All'?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
  }

  addToFav(id:number){
    this.getFoodById(id).favorite=!this.getFoodById(id).favorite;
  }
}

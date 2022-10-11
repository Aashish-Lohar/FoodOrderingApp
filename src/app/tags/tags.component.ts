import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from '../shared/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags:Tag[]=[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    console.log(this.foodPageTags)
    if(!this.foodPageTags)
    {
      this.tags=this.fs.getAllTag()
    }
  }

}

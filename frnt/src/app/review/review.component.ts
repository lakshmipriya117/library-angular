import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ReviewserviceService} from '../reviewservice.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews=[{
    proName :'',
    proAuth:'',
    proGenre:'',
   
    proDesc:'',
    proImage:''}]

  constructor(private router:Router,private reviewService: ReviewserviceService) { }

  ngOnInit(): void {
    console.log("working");
    this.reviewService.getReviews().subscribe((data)=>{
      this.reviews=JSON.parse(JSON.stringify(data));
      console.log(this.reviews);
  })
  }

}

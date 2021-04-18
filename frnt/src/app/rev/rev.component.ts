import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ReviewserviceService} from '../reviewservice.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-rev',
  templateUrl: './rev.component.html',
  styleUrls: ['./rev.component.css']
})
export class RevComponent implements OnInit {
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
  })
  }
  editReview(review:any)
  {
    localStorage.setItem("editReviewId", review._id.toString());
    this.router.navigate(['uprev']);

  }
  deleteReview(review:any)
  {
    console.log("deleting");
    this.reviewService.deleteReview(review._id)
      .subscribe((data) => {
        this.reviews = this.reviews.filter(p => p !== review);
      })
  

  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewserviceService } from '../reviewservice.service';

@Component({
  selector: 'app-uprev',
  templateUrl: './uprev.component.html',
  styleUrls: ['./uprev.component.css']
})
export class UprevComponent implements OnInit {
  item={
    Name:'',
    Auth:'',
    Genre:'',
   
    Desc:'',
    Image:''

  }
  constructor(private reviewService:ReviewserviceService,private router:Router) { }

  ngOnInit(): void {
    let reviewId = localStorage.getItem("editReviewId");
    this.reviewService.getReview(reviewId).subscribe((data)=>{
      this.item=JSON.parse(JSON.stringify(data));
  })
 
  }
  editReview()
  {    
    this.reviewService.editReview(this.item);   
    alert("Success");
    this.router.navigate(['rev']);
  }

}

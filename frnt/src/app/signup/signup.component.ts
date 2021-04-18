import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private router:Router,private userService:UserService) { }
  userItem={
    fname:'',
    lname:'',
    email:'',
    pwd:'',
    phone:''
  }
  ngOnInit(): void {
  }
  onsubmit()
  {
    this.userService.newUser(this.userItem);
    console.log("called");
    this.router.navigate(['/login'])
  }
}

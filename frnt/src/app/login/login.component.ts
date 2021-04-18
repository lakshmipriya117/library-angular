import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    uname:'',
    pwd:''
  }

  constructor(private router:Router,private userService:UserService) {}

  ngOnInit(): void {
  }
  onsubmit()
  {
    if(this.user.uname=="admin" && this.user.pwd=="admin123")
    {
      this.router.navigate(['/rev'])
    }
    console.log("works");
    this.userService.userAuth(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/review'])
      },
      err => {
        console.log(err);
        //alert(err.statusText);
        //this.router.navigate(['/review'])
      }
    ) 
  }
  
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  
  newUser(item:any){
    console.log("service working!!");
    return this.http.post("http://localhost:3000/new",{"user":item})
    .subscribe(data =>{console.log(data)});
  }
  //private _loginUrl = "http://localhost:3000/auth";


  userAuth(user:any)
  {
    console.log("userAuth called");
    return this.http.post<any>("http://localhost:3000/auth", user)
  }

  loggedIn()
  {
    console.log("log called");
    return localStorage.getItem('token')
  }
  getToken()
  {
    console.log("token called");
    return localStorage.getItem('token')
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { AddrevComponent } from './addrev/addrev.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RevComponent } from './rev/rev.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';


import { UprevComponent } from './uprev/uprev.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'review',component:ReviewComponent},


{path:'addrev',component:AddrevComponent},
{path:'rev',component:RevComponent},
{path:'uprev',component:UprevComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

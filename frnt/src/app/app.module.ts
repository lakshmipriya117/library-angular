import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

import { ReviewComponent } from './review/review.component';


import { Header3Component } from './header3/header3.component';
import { AddrevComponent } from './addrev/addrev.component';
import { HttpClientModule } from '@angular/common/http';
import { RevComponent } from './rev/rev.component';
import { UprevComponent } from './uprev/uprev.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
   
    ReviewComponent,
  
    Header3Component,
    AddrevComponent,
    RevComponent,
    UprevComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

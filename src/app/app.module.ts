import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ServiceComponent} from "./service/service.component";
import {ServiceDetailsComponent} from "./service-details/service-details.component";
import {IndexComponent} from "./index/index.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./sign/login.component";


const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service-details',      component: ServiceDetailsComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'login',      component: LoginComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    IndexComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only : true
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

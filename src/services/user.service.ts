import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions }       from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from './config';

@Injectable()
export class UserService {

  baseUrl = "";
  user:any;
  headers = new Headers();
  options:RequestOptions;
  constructor(public http:Http) {
    this.baseUrl = Config.BASE_URL;
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers:this.headers})
  };

  public getUser(){
    return this.http
      .get(this.baseUrl+'user')
      .map(response => response.json());
  }

  public join(){
    console.log("post user")

    return this.http
      .post(this.baseUrl+"user",JSON.stringify(this.user),this.options)
      .map(response => response.json());
  }

  public login(email:String,mdp:String){
    let user = {email:email,mdp:mdp};
    return this.http.post(this.baseUrl+"login",JSON.stringify(user),this.options)
      .map(response => response.json());
  }

  /*
   *GetUser by id
   */
  public getUserById(){
    this.headers.append('Content-Type', 'application/json');

  }

}

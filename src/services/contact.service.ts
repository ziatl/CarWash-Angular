import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions }       from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from './config';

@Injectable()
export class ContactService{
  baseUrl = "";
  contact:any;
  headers = new Headers();
  options:RequestOptions;

  constructor(public http:Http) {
    this.baseUrl = Config.BASE_URL;
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers:this.headers})
  };

  public sendMessage(contact:any){
    return this.http
      .post(this.baseUrl+"contact",JSON.stringify(this.contact),this.options)
      .map(response => response.json());

  }
}

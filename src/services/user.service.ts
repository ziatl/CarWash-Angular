import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from './config';

@Injectable()
export class UserService {

  baseUrl = "";

  constructor(public http:Http) {
    this.baseUrl = Config.BASE_URL;
  };

  public getUser(){
    return this.http
      .get(this.baseUrl+'user')
      .map(res => res.json());
  }

}

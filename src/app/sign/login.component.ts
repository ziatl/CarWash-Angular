import {Component, OnInit} from "@angular/core";
import {User} from "./../models/user.model";
import { FormsModule, FormGroup, Validators } from '@angular/forms';
import {UserService} from './../../services/user.service';

@Component({
  selector:'tag-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]

})

export class LoginComponent implements OnInit{
  title = 'LACS : Log in';
  classLogin = "";
  classPassword = "";
  errLogin = "";
  errPassword = "";
  user = new User();

  reponse:User[];


  constructor(public userService: UserService){
    this.user = new User();

  }
  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
  }



  login ($event){

    this.classLogin = "";
      this.classPassword = "";
      if (this.user.email == ""){
        this.classLogin = "error-field";
      }

      if (this.user.password == "") {
        this.classPassword = "error-field";
      }

      this.userService.getUser().subscribe(data => {
        this.reponse = data;
        console.log(this.reponse);
      });


  }



}


import {Component, OnInit} from "@angular/core";
import {User} from "./../models/user.model";
import { FormsModule, FormGroup, Validators } from '@angular/forms';
import {UserService} from './../../services/user.service';
import { Router } from '@angular/router';

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
  erreurLogin = "";
  user = new User();

  reponse:User[];


  constructor(public userService: UserService,public router:Router){
    this.user = new User();

  }
  ngOnInit(){
    //called after the constructor and called  after the first ngOnChanges()
  }


  /*
  *Login
   */
  login ($event){

    this.classLogin = "";
    this.classPassword = "";
    let erreur = false;
      if (this.user.email == ""){
        erreur = true;
        this.classLogin = "error-field";
      }

      if (this.user.mdp == "") {
        erreur = true;
        this.classPassword = "error-field";
      }

    let resultat:any;
    if (erreur==false) {
      this.userService.login(this.user.email,this.user.mdp).subscribe(data => {
        resultat = data;
        console.log(resultat);
        if(resultat.id == 0) {
          this.erreurLogin = "Email ou Mot de passe incorrecte."
        }else {
          localStorage.setItem("wcemail",resultat.email);
          localStorage.setItem("wcnom",resultat.nom);
          localStorage.setItem("wcprenom",resultat.prenom);
          localStorage.setItem("wcid",resultat.id);
          window.location.href = "/";
        }
      });
    }
  }




}


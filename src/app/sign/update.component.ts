import {Component} from '@angular/core';
import {UserService} from './../../services/user.service';
import {User} from "./../models/user.model";
import { FormsModule, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector:'tag-join',
  templateUrl:'./update.component.html',
  styleUrls:['./update.component.css'],
  providers:[UserService]

})

export class UpdateComponent{

  reponse:any;
  user = new User();
  errEmail = "";
  etat = "";
  constructor(public userService: UserService){
    this.userService.user = {};
    if(!localStorage.getItem("loginState")){
      window.location.href = "/login";
    }
    this.user = new User();
    this.userService.getUserById(localStorage.getItem("wcid")).subscribe(data=>{
      this.reponse = data;
      this.jsonToUser(this.reponse);
    });

  }

  public join(f:NgForm){
    this.userService.user = {
      nom:this.user.nom,
      prenom:this.user.prenom,
      email:this.user.email,
      mdp:this.user.mdp,
      telephone:this.user.telephone,
      dateCreate:this.user.dateCreate,
      dateUpdate:this.user.dateUpdate,
      adresse:this.user.adresse,
      id:this.user.id
    };
    this.userService.updateUser().subscribe(data => {
      this.reponse = data;
      if (this.reponse.id == 0){
        this.errEmail = "Adresse e-mail déjà utilisé.";
        this.userService.user = {};
      }else {
        this.jsonToUser(this.reponse);
        this.etat = "true";
      }
    });
  }

  public jsonToUser(reponse:any){
    this.user.nom = reponse["nom"];
    this.user.prenom = reponse["prenom"];
    this.user.adresse = reponse["adresse"];
    this.user.email = reponse["email"];
    this.user.dateCreate = reponse["dateCreate"];
    this.user.dateUpdate = reponse["dateUpdate"];
    this.user.id = reponse["id"];
    this.user.telephone = reponse["telephone"];
    this.user.mdp = reponse = reponse["mdp"];
  }
}

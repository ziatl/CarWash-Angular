import {Component} from '@angular/core';
import {UserService} from './../../services/user.service';
import {User} from "./../models/user.model";
import { FormsModule, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector:'tag-join',
  templateUrl:'./join.component.html',
  styleUrls:['./join.component.css'],
  providers:[UserService]

})

export class JoinComponent{

  reponse:any;
  user = new User();
  errEmail = "";
  etat = "";
  constructor(public userService: UserService){
    this.userService.user = {};
    this.user = new User();
    this.errEmail = "";
  }

  public join(f:NgForm){
    this.userService.user = {
      nom:this.user.nom,
      prenom:this.user.prenom,
      email:this.user.email,
      mdp:this.user.mdp,
      telephone:this.user.telephone
    };
    console.log(f)
      this.userService.join().subscribe(data => {
        this.reponse = data;
        console.log(this.reponse);
        if (this.reponse.id == 0){
          this.errEmail = "Adresse e-mail déjà utilisé.";
          this.userService.user = {};
        }else {
          this.etat = "false";
        }
      });
  }
}

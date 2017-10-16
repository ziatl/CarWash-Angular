import {Component,OnInit} from "@angular/core";
import {User} from "./../models/user.model";
import {UserService} from  "./../../services/user.service";

@Component({
    selector : "tag-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ['./profile.component.css'],
    providers: [UserService]
})

export class ProfileComponent implements OnInit {
  user = new User();
  constructor(public userService:UserService){

  }

  ngOnInit(){
    this.user = new User();
    if (localStorage.getItem("wcid")){
      this.userService.getUserById(localStorage.getItem("wcid")).subscribe(data => {
        this.user = data;
      });
    }
  }


}

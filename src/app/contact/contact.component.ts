import {Component} from "@angular/core";
import {ContactService} from "./../../services/contact.service";
import {ContactModel} from "./../models/contact.model"
@Component({
  selector:'tag-contact',
  templateUrl: './contact.component.html',
  providers: [ContactService]

})

export class ContactComponent{
  title = 'CLACS : Contact';
  contact:ContactModel;

  constructor(public contactService:ContactService){
    this.contact = new ContactModel();
    if (localStorage.getItem("wcemail")){
      this.contact.email = localStorage.getItem("wcemail");
    }
    if (localStorage.getItem("wcnom")){
      this.contact.nom = localStorage.getItem("wcnom");
    }

    this.contact.sujet = "";

    this.contact.message = "";
  }

  contacter(){
    console.log(this.contact);
    this.contactService.contact = {
      nom:this.contact.nom,
      email:this.contact.email,
      sujet:this.contact.sujet,
      message:this.contact.message
    };
    this.contactService.sendMessage(this.contact).subscribe(data => {
      this.contact = data;
      window.location.href = "/";
    });
  }
}

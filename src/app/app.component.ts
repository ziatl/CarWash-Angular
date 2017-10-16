import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})


export class AppComponent {
  title = 'app works!';

  hideCon = true;

  constructor(){
      if (!localStorage.getItem("wcid")){
          this.hideCon = false;
      }
  }

  showService(){
      console.log("show ser");
      let nom = localStorage.getItem("nom");
      console.log(nom);
  }
  showServiceDetails(){

  }
  showContact(){

  }
  showAbout(){

  }
  disconnect(){
    localStorage.removeItem("wcemail");
    localStorage.removeItem("wcnom");
    localStorage.removeItem("wcprenom");
    localStorage.removeItem("wcid");
    localStorage.removeItem("wcnom");
  }
}

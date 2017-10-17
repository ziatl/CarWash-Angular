export class ContactModel {
  public id;
  public nom;
  public email;
  public sujet;
  public message;
  public dateCreate;

  constructor(){
    this.id = 0;
    this.nom = "";
    this.email = "";
    this.sujet = "";
    this.message = "";
    this.dateCreate = "";
  }

}

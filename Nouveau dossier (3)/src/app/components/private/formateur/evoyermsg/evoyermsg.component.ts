import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Message } from 'src/app/message';
import { ServiceapprenantService } from 'src/app/serviceapprenant.service';
import { ServiceformateurService } from 'src/app/serviceformateur.service';
import { ServicemessageService } from 'src/app/servicemessage.service';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-evoyermsg',
  templateUrl: './evoyermsg.component.html',
  styleUrls: ['./evoyermsg.component.css']
})
export class EvoyermsgComponent implements OnInit {
  myform: FormGroup;
  listeapprenant = []
  token: any;
  Id: any;


  constructor(private fb: FormBuilder, private router: Router, public jwtHelper: JwtHelperService, private serviceapprenant: ServiceapprenantService, private serviceformateur: ServiceformateurService, private servicemessage: ServicemessageService, private serviceuser: ServiceuserService) {
    let FormControls = {

      id: new FormControl('', [Validators.required]),

      apprenant: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);

  }

  ngOnInit(): void { //apport de la liste des apprenants aux quels un formateur va envoyer des messages 
    this.serviceuser.getuserswithrole("apprenant").subscribe(
      (result => { this.listeapprenant = result; }),
      ((errors) => { console.log(errors); })
    )
  }
  get id() {
    return this.myform.get("id");
  }
  get apprenant() {
    return this.myform.get("apprenant");
  }
  get message() {
    return this.myform.get("message");
  }
  addmessage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.Id = this.jwtHelper.decodeToken(this.token).User_Id;

    console.log(this.myform.value) //ici l id du formateur li sta3mlneha besh jebna esmou 
    let formateur: User;
    let data = this.myform.value;
    this.serviceuser.getuserwithid(this.Id).subscribe(
      result => {
        formateur = result; console.log(formateur); console.log(formateur.prenom)
        let msg = new Message(null, this.Id, formateur.prenom, data.apprenant, data.message);
        this.servicemessage.addmessage(msg).subscribe(
          result => {
            console.log(result);

          },
          errors => { console.log(errors); }
        )
      },
      errors => { console.log(errors); })






  }
}

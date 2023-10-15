import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceformateurService } from 'src/app/serviceformateur.service';
import { ServicesessionService } from 'src/app/servicesession.service';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { Session } from 'src/app/session';
import { User } from 'src/app/user';
@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  myform: FormGroup
  listeformateur = [];
  constructor(private fb: FormBuilder, private servicesession: ServicesessionService, private router: Router, private serviceuser :ServiceuserService) {
    let FormControls = {
      ctheme: new FormControl('', [
        Validators.required, Validators.minLength(2)]),
      cdatedeb: new FormControl('', [
        Validators.required]),
      cdatefin: new FormControl('', [
        Validators.required]),
      cheuredeb: new FormControl('', [Validators.required]),
      cheurefin: new FormControl('', [Validators.required]),
      cprix: new FormControl('', [Validators.required, Validators.pattern("[0-9][0-9][0-9]")]),
      cnombredeplace: new FormControl('', [Validators.required, Validators.pattern("[0-9][0-9]")]),
      formateur: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);
  }

  ngOnInit(): void {
    this.serviceuser.getuserswithrole("formateur").subscribe(
      (result => { this.listeformateur = result; console.log(result) }),
      ((errors) => { console.log(errors); })
    )
  }
  get ctheme() {
    return this.myform.get("ctheme");
  }
  get cdatedeb() {
    return this.myform.get("cdatedeb");
  }
  get cdatefin() {
    return this.myform.get("cdatefin");
  }
  get cheuredeb() {
    return this.myform.get("cheuredeb");
  }
  get cheurefin() {
    return this.myform.get("cheurefin");
  }
  get cprix() {
    return this.myform.get("cprix");
  }
  get cnombredeplace() {
    return this.myform.get("cnombredeplace");
  }
  get formateur() {
    return this.myform.get("formateur");
  }
  savesession() {

    let data = this.myform.value;
    let idformateur = data.formateur;
    let user: User;
    this.serviceuser.getuserwithid(idformateur).subscribe(
      result => {
        user = result;
        let session = new Session(null, data.ctheme, data.cdatedeb, data.cdatefin, data.cheuredeb, data.cheurefin, data.cprix, data.cnombredeplace, data.formateur, user.prenom);
        console.log(session);
        this.servicesession.addsession(session).subscribe(
          result => {
            console.log(result);
            this.router.navigate(['/listesession']);
          },
          errors => { console.log(errors); }
        )
      },
      errors => { console.log(errors); }
    )

  }
}

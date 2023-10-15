import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Message } from 'src/app/message';
import { ServiceapprenantService } from 'src/app/serviceapprenant.service';
import { ServiceformateurService } from 'src/app/serviceformateur.service';
import { ServicemessageService } from 'src/app/servicemessage.service';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-aenvoyermsg',
  templateUrl: './aenvoyermsg.component.html',
  styleUrls: ['./aenvoyermsg.component.css']
})
export class AenvoyermsgComponent implements OnInit {
  myform: FormGroup;
  listeformateur = []
  token: any;
  Id: any;
  constructor(private fb: FormBuilder, private router: Router, private serviceapprenant: ServiceapprenantService, private serviceformateur: ServiceformateurService, private servicemessage: ServicemessageService , private serviceuser:ServiceuserService , public jwtHelper: JwtHelperService)
   {
    let FormControls = {

      id: new FormControl('', [Validators.required]),

      formateur: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);

    }

  ngOnInit(): void { 
    this.serviceuser.getuserswithrole("formateur").subscribe(  // on va amener la liste des formateur pour que l 'apprenant envoie un msg 
      (result => { this.listeformateur = result; console.log(result) }),
      ((errors) => { console.log(errors); })
    )
  }
  get id() {
    return this.myform.get("id");
  }
  get formateur() {
    return this.myform.get("formateur");
  }
  get message() {
    return this.myform.get("message");
}

addmessage(){ 

  console.log(this.myform.value)
  let apprenant: User;
  let data = this.myform.value; 
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.token = currentUser && currentUser.token;
  this.Id = this.jwtHelper.decodeToken(this.token).User_Id;
  
  this.serviceuser.getuserwithid(this.Id).subscribe(
    result => { apprenant = result; console.log(apprenant) ; console.log(apprenant.prenom) 
      let msg = new Message(null,this.Id,apprenant.prenom,data.formateur,data.message); 
      console.log(msg)
     this.servicemessage.addmessage(msg).subscribe(
        result => {
          console.log(result);
          this.router.navigateByUrl('/amessagerie')
        }, 
        errors => { console.log(errors); }
      )            },
    errors => { console.log(errors); }) 
  





}


}

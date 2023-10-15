import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServicemessageService } from 'src/app/servicemessage.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
listemessage=[] ; 
  token: any;
  Id: any;
  constructor( private servicemessage:ServicemessageService , public jwtHelper: JwtHelperService ) { }

  ngOnInit(): void { //lahne l formateur besh yjib les msg li bathouhomlou les apprenents avec id recepteur = id apprenant
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 
    this.servicemessage.getmessagewithidrecepteur(this.Id).subscribe(
      ( result => { this.listemessage = result; }),
      (( errors) => { console.log(errors); })
     ) 
  }
  deletemessage(i) { 
    this.servicemessage.deletemessage(i.id).subscribe( ( result => { this.listemessage = result; 
     } 
      ),
    (( errors) => { console.log(errors); }))
  }
}

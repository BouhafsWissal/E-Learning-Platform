import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceparticipationService } from 'src/app/serviceparticipation.service';

@Component({
  selector: 'app-messessions',
  templateUrl: './messessions.component.html',
  styleUrls: ['./messessions.component.css']
})
export class MessessionsComponent implements OnInit {

  listeparticipation = [];
  etat = "confirmé"
  token: any;
  Id: any;

  constructor(private serviceparticipation: ServiceparticipationService, public jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.Id = this.jwtHelper.decodeToken(this.token).User_Id;

    this.serviceparticipation.getparticipationwithidapprenantandetat(this.Id, this.etat).subscribe(
      (result => { this.listeparticipation = result; console.log(result) }),
      ((errors) => { console.log(errors); })
    )
  }


}

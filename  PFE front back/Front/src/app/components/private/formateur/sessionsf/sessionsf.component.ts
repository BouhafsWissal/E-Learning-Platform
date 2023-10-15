import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServicesessionService } from 'src/app/servicesession.service';

@Component({
  selector: 'app-sessionsf',
  templateUrl: './sessionsf.component.html',
  styleUrls: ['./sessionsf.component.css']
})
export class SessionsfComponent implements OnInit {

  listesession = [];
  token: any;
  Id: any;
  constructor(private servicesession: ServicesessionService ,  public jwtHelper: JwtHelperService) { }

  ngOnInit(): void {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.Id = this.jwtHelper.decodeToken(this.token).User_Id;

    this.servicesession.getsessionwithidformaateur(this.Id).subscribe(
      result => {
        this.listesession = result; console.log(result);
      },
      errors => {
        console.log(errors);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Participation } from 'src/app/participation';
import { ServiceparticipationService } from 'src/app/serviceparticipation.service';
import { ServicesessionService } from 'src/app/servicesession.service';
import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-listesession',
  templateUrl: './listesession.component.html',
  styleUrls: ['./listesession.component.css']
})
export class ListesessionComponent implements OnInit {
  listesession = [] ; 
  token: any;
  Id: any;
 

  constructor(private servicesession : ServicesessionService ,private serviceuser :ServiceuserService, private router: ActivatedRoute, private route: Router , private serviceparticipation:ServiceparticipationService ,  public jwtHelper: JwtHelperService) { }
  
  ngOnInit(): void { this.servicesession.getallsession().subscribe(
    ( result => { this.listesession = result; console.log(result) } ),
    (( errors) => { console.log(errors); })
   ) 

  }
  deletesession(i) {
    this.servicesession.deletesession(i.id).subscribe(
      result => { this.listesession = result; },
      errors => { console.log(errors); } ) }
    
  
  participer(i){ 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 
    
    let etatdeb="en cours de traitement " 
    
     let part =new Participation(null,this.Id,i.id,i.theme,i.datedeb,i.datefin,i.nomformateur,etatdeb)
        this.serviceparticipation.addparticipation(part).subscribe(
          result => {
            console.log(result);   },
          errors => { console.log(errors); }) 
      
      
      
      
      }
    
  } 


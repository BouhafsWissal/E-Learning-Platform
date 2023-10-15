import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
   users:any   ;  
   nom :any; 
   prenom : any ; 
   role : any ; 
   cin:any ; 
   datenaissance:any ; 
   tel:any ; 
   email: any ; 
   motdepasse:any ; 
   id:any ; 
  token: any;
  Id: any;
  constructor(private serviceuser :ServiceuserService , public jwtHelper: JwtHelperService) { }

  ngOnInit(): void {  
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 

    this.serviceuser.getuserwithid(this.Id).subscribe(
      ( result => { this.users= result ; console.log(this.users) ; 
      this.nom=this.users.nom ; 
      this.prenom=this.users.prenom ; 
      this.cin=this.users.cin ; 
      this.tel=this.users.tel ; 
      this.email=this.users.email ; 
      this.motdepasse=this.users.motdepasse ; 
      this.datenaissance=this.users.datenaissance ; 
      this.role=this.users.role; 
     
    console.log(this.nom)     ;  }),
      (( errors) => { console.log(errors);  
         })
     ) 
  }

}

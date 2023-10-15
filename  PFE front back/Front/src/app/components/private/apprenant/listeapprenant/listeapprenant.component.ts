import { Component, OnInit } from '@angular/core';
import { ServiceapprenantService } from 'src/app/serviceapprenant.service';
import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.css']
})
export class ListeapprenantComponent implements OnInit {
  listeapprenant=[ ] ; 
  nom: string;
 
  constructor( private serviceuser :ServiceuserService) { }

  ngOnInit(): void { 
    let role ="apprenant"
    this.serviceuser.getuserswithrole(role).subscribe(
    ( result => { this.listeapprenant = result; }),
    (( errors) => { console.log(errors); })
   ) 
   
  }
  search() {
    if (this.nom != "") {
      this.listeapprenant = this.listeapprenant.filter(res => {
        return res.nom.toLocaleLowerCase().match(
          this.nom.toLocaleLowerCase()
        )
      })
    } else if (this.nom == "") {
      this.ngOnInit();
    }
  }
  deleteapprenant(i) {
    this.serviceuser.deleteuserwithid(i.id).subscribe(
      result => { this.listeapprenant = result;  
      this.ngOnInit(); },
      errors => { console.log(errors); }
    )
  }
}

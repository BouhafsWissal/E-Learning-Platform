import { Component, OnInit } from '@angular/core';
import { ServiceformateurService } from 'src/app/serviceformateur.service';
import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-listeformateur',
  templateUrl: './listeformateur.component.html',
  styleUrls: ['./listeformateur.component.css']
})
export class ListeformateurComponent implements OnInit {
  listeformateur=[ ] ; 
  nom: string;
  constructor(private serviceuser :ServiceuserService) { }

  ngOnInit(): void {  
    let role ="formateur"
    this.serviceuser.getuserswithrole(role).subscribe(
      ( result => { this.listeformateur = result; }),
      (( errors) => { console.log(errors); })
     )
  }
  search() {
    if (this.nom != "") {
      this.listeformateur = this.listeformateur.filter(res => {
        return res.nom.toLocaleLowerCase().match(
          this.nom.toLocaleLowerCase()
        )
      })
    } else if (this.nom == "") {
      this.ngOnInit();
    }
  }
  deleteformateur(i) {
    this.serviceuser.deleteuserwithid(i.id).subscribe(
      result => { this.listeformateur = result;  
      this.ngOnInit() ; },
      errors => { console.log(errors); }
    )
  }
}

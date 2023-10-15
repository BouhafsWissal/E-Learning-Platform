import { SelectorMatcher } from '@angular/compiler'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-listegestionnaire',
  templateUrl: './listegestionnaire.component.html',
  styleUrls: ['./listegestionnaire.component.css']
})
export class ListegestionnaireComponent implements OnInit {
  
  listegestionnaire = [];
  nom: string;

  constructor(private serviceuser: ServiceuserService ,private router: ActivatedRoute) { }

  ngOnInit(): void {
    let role = "gestionnaire"
    this.serviceuser.getuserswithrole(role).subscribe(
      (result => { this.listegestionnaire = result; }),
      ((errors) => { console.log(errors); })
    )
  }

  search() {
    if (this.nom != "") {
      this.listegestionnaire = this.listegestionnaire.filter(res => {
        return res.CompanyName.toLocaleLowerCase().match(
          this.nom.toLocaleLowerCase()
        )
      })
    } else if (this.nom == "") {
      this.ngOnInit();
    }
  }

  deletegestionnaire(i) {
    this.serviceuser.deleteuserwithid(i.id).subscribe(
      result => { this.listegestionnaire = result; 
      this.ngOnInit() ;  },
  

      errors => { console.log(errors); }
    )


  }





























}

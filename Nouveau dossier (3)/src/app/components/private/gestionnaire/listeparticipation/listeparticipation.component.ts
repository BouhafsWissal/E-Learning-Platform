import { Component, OnInit } from '@angular/core';
import { ServiceparticipationService } from 'src/app/serviceparticipation.service';

@Component({
  selector: 'app-listeparticipation',
  templateUrl: './listeparticipation.component.html',
  styleUrls: ['./listeparticipation.component.css']
})
export class ListeparticipationComponent implements OnInit {
listeparticipation=[] ; 
  constructor( private serviceparticipation :ServiceparticipationService) { }

  ngOnInit(): void { 
    this.serviceparticipation.getallparticipation().subscribe(
      ( result => { this.listeparticipation = result; console.log(result) }),
      (( errors) => { console.log(errors); })
     ) 
     
    
  }
  deleteparticipation(i) {
    this.serviceparticipation.deleteparticipation(i.id).subscribe(
      result => { this.listeparticipation = result; },
      errors => { console.log(errors); }
    )
  }
}

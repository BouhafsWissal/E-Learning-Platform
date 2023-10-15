import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceevaluationService } from '../serviceevaluation.service';
import { ServicesessionService } from '../servicesession.service';

@Component({
  selector: 'app-tableevaluation',
  templateUrl: './tableevaluation.component.html',
  styleUrls: ['./tableevaluation.component.css']
})
export class TableevaluationComponent implements OnInit {
  listeevaluations = [ ]; 
  theme : any ; 
  session : any ; 

  constructor(private serviceevaluation : ServiceevaluationService ,private router: ActivatedRoute , private servicesession : ServicesessionService) { }

  ngOnInit(): void {  
    let idsession = this.router.snapshot.params.id; 
    this.servicesession.getsessionwithid(idsession).subscribe(
      res=>{ 
        console.log(res) ; 
        this.session=res ; 
        this.theme=this.session.theme

      } , 
      errors=>{ console.log(errors)}
    )
    this.serviceevaluation.getevaluation(idsession).subscribe(
      ( result => { this.listeevaluations = result; }),
      (( errors) => { console.log(errors); })
     )
  }

}

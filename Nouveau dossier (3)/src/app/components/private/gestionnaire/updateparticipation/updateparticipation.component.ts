import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from 'src/app/participation';
import { ServiceparticipationService } from 'src/app/serviceparticipation.service';

@Component({
  selector: 'app-updateparticipation',
  templateUrl: './updateparticipation.component.html',
  styleUrls: ['./updateparticipation.component.css']
})
export class UpdateparticipationComponent implements OnInit {
  myform :FormGroup
  constructor(private fb :FormBuilder , private router: ActivatedRoute ,private serviceparticipation : ServiceparticipationService, private route: Router) {
    let FormControls={
       cetat: new FormControl('',[
        Validators.required  ] ) , 
      
    } 
    this.myform=this.fb.group(FormControls) ; 
   }

  ngOnInit(): void {
    let idparticipation = this.router.snapshot.params.id;
    this.serviceparticipation.getparticipationwithid(idparticipation).subscribe(
      result => {
        let participation = result;
        this.myform.patchValue({
          cetat: participation.etat
         
        });
      },
      errors => { console.log(errors); }
    )
  }
  get cetat(){ 
    return this.myform.get("cetat") ; 
   } 
   saveupdate() {
   
    let idparticipation = this.router.snapshot.params.id;
    let data = this.myform.value;  
    console.log(data) ; 
    console.log(idparticipation)
   this.serviceparticipation.getparticipationwithid(idparticipation).subscribe(
      result => { let part = result; console.log(part) ; 
        let p = new Participation(idparticipation,part.idapprenant,part.idsession,part.nomsession,part.datedeb,part.datefin,part.nomformateur,data.cetat); 
        console.log(p)
       this.serviceparticipation.updateparticipation(p).subscribe(
          result => {
            console.log(result);
            this.route.navigate(['/listeparticipation'])
          },
          errors => { console.log(errors); }
        )            },
      errors => { console.log(errors); }) 

    

    
  }
}

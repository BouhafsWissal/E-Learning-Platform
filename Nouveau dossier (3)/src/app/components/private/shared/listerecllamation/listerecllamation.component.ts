import { Component, OnInit } from '@angular/core';
import { ServicereclamationService } from 'src/app/servicereclamation.service';

@Component({
  selector: 'app-listerecllamation',
  templateUrl: './listerecllamation.component.html',
  styleUrls: ['./listerecllamation.component.css']
})
export class ListerecllamationComponent implements OnInit {
   
        listereclamation = [];
  constructor(private servicereclamation : ServicereclamationService) { }

  ngOnInit(): void { this.servicereclamation.getallreclamation().subscribe(
    ( result => { this.listereclamation = result; }),
    (( errors) => { console.log(errors); })
   )
  }
 
  deletemessaage(i){ 
    this.servicereclamation.deletereclamationwithid(i.id).subscribe( 
      res=>{ this.listereclamation=res ; 
      this.ngOnInit(); } , 
      error=>{ 
        console.log(error);}
        )
      }
    
  }


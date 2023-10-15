import { Component, OnInit } from '@angular/core';
import { ServicesessionService } from 'src/app/servicesession.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/session';

@Component({
  selector: 'app-updatesession',
  templateUrl: './updatesession.component.html',
  styleUrls: ['./updatesession.component.css']
})
export class UpdatesessionComponent implements OnInit {
  myform: FormGroup
  constructor(private fb: FormBuilder, private router: ActivatedRoute, private route: Router, private servicesession : ServicesessionService) {
    let FormControls = {
      ctheme: new FormControl('', [
        Validators.required, Validators.minLength(2)]),
      cdatedeb: new FormControl('', [
        Validators.required]),
      cdatefin: new FormControl('', [
        Validators.required]),
      cheuredeb: new FormControl('', [Validators.required]),
      cheurefin: new FormControl('', [Validators.required]),
      cprix: new FormControl('', [Validators.required, Validators.pattern("[0-9][0-9][0-9]")]),
      cnombredeplace: new FormControl('', [Validators.required, Validators.pattern("[0-9][0-9][0-9]")]),
      cidformateur: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);
  }

  ngOnInit(): void {
    let idsession = this.router.snapshot.params.id;
    this.servicesession.getsessionwithid(idsession).subscribe(
      result => {
        let session = result;
        this.myform.patchValue({
          ctheme: session.theme,
          cdatedeb: session.datedeb,
          cdatefin: session.datefin,
          cheuredeb: session.heuredeb,
          cheurefin: session.heurefin,
          cprix: session.prix,
          cnombredeplace: session.nombredepace,
          cidformateur: session.idformateur
        });
      },
      errors => { console.log(errors); }
    )
  }
  get ctheme() {
    return this.myform.get("ctheme");
  }
  get cdatedeb() {
    return this.myform.get("cdatedeb");
  }
  get cdatefin() {
    return this.myform.get("cdatefin");
  }
  get cheuredeb() {
    return this.myform.get("cheuredeb");
  }
  get cheurefin() {
    return this.myform.get("cheurefin");
  }
  get cprix() {
    return this.myform.get("cprix");
  }
  get cnombredeplace() {
    return this.myform.get("cnombredeplace");
  }
  get cidformateur() {
    return this.myform.get("cidformateur");
  }
  saveupdate() {
    let idsession = this.router.snapshot.params.id;
    let data = this.myform.value; 
    console.log(data)
    let session = new Session(idsession, data.ctheme, data.cdatedeb, data.cdatefin, data.cheuredeb, data.cheurefin, data.cprix, data.cnombredeplace , data.cidformateur,data.nomformateur);
    this.servicesession.updatesession(session).subscribe(
      result => { this.route.navigate(['/listesession']);  console.log(result)},
      errors => { console.log(errors) }
      
    )

  }
}

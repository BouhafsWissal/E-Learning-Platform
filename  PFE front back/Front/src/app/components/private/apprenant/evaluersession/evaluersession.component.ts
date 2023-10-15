import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Evaluation } from 'src/app/evaluation';
import { ServiceevaluationService } from 'src/app/serviceevaluation.service';
import { ServicesessionService } from 'src/app/servicesession.service';
import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-evaluersession',
  templateUrl: './evaluersession.component.html',
  styleUrls: ['./evaluersession.component.css']
})
export class EvaluersessionComponent implements OnInit {
  myform: FormGroup;
  session: any;
  theme: string;
  apprenant: any;
  nomsession: any;
  session1: any;
  constructor(private fb: FormBuilder, private serviceevaluation: ServiceevaluationService, private router: ActivatedRoute, private sessionservice: ServicesessionService, private serviceuser: ServiceuserService) {
    let FormControls = {
      radioq1: new FormControl('', [
        Validators.required]),
      radioq2: new FormControl('', [
        Validators.required]),
      radioq3: new FormControl('', [
        Validators.required])

    }
    this.myform = this.fb.group(FormControls);

  }

  ngOnInit(): void {
    let idsession = this.router.snapshot.params.idsession;
    let idapp = this.router.snapshot.params.idapp;
    console.log("id session " + idsession); console.log("id app " + idapp);
    this.sessionservice.getsessionwithid(idsession).subscribe(
      res => {
        this.session = res
        console.log(res);
        this.theme = this.session.theme;
        console.log(this.theme)
      },
      errors => { console.log(errors); }

    )
  }
  get radioq1() {
    return this.myform.get("radioq1");

  }
  get radioq2() {
    return this.myform.get("radioq2");


  }
  get radioq3() {
    return this.myform.get("radioq3");
  }

  envoyer() {
    let data = this.myform.value;
    console.log(data);
    let idsession1 = this.router.snapshot.params.idsession;
    let idapp1 = this.router.snapshot.params.idapp;


    this.serviceuser.getuserwithid(idapp1).subscribe(
      res => {
        this.apprenant = res;
        console.log(this.apprenant);
        this.sessionservice.getsessionwithid(idsession1).subscribe(
          res => {
            this.session1 = res;
            console.log(this.session1);
            console.log(this.session.id, this.session.theme)
            let evaluation1 = new Evaluation(null, this.apprenant.id, this.apprenant.nom, this.apprenant.prenom, this.session1.id, this.session1.theme, data.radioq1, data.radioq2, data.radioq3);
            console.log(evaluation1);
            this.serviceevaluation.addevaluation(evaluation1).subscribe(
              res => {
                console.log(res);
                console.log("sucess");
              }, errors => { console.log(errors); }
            )
          },




          errors => { console.log(errors); }

        )
      },
      errors => {
        console.log(errors);
      }








    )

    /* let role ="gestionnaire"
     let gest = new User(null, data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse,role);
     console.log(gest);
     this.serviceuser.adduser(gest).subscribe(
       result => {
         console.log(result);
         this.router.navigate(['/listegestionnaire']);
       },
       errors => { console.log(errors); }
     )*/
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent implements OnInit {
  myform: FormGroup 
  token: any;
  Id: any;
  constructor(private fb: FormBuilder, private router: ActivatedRoute,private serviceuser : ServiceuserService, private route: Router ,  public jwtHelper: JwtHelperService) {  let FormControls = {
    cnom: new FormControl('', [
      Validators.required, Validators.minLength(3)]),
    cprenom: new FormControl('', [
      Validators.required, Validators.minLength(3),]),
    ccin: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    cmotdepasse: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cemail: new FormControl('', [Validators.required, Validators.email]),
    ctel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    cdate: new FormControl('', [Validators.required])
  }
  this.myform = this.fb.group(FormControls);}

  ngOnInit(): void {  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.token = currentUser && currentUser.token;
  this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 
    this.serviceuser.getuserwithid(this.Id).subscribe(
    result => {
      let user = result;
      this.myform.patchValue({
        cnom: user.nom, 
        cprenom: user.prenom,
        ccin: user.cin,
        ctel: user.tel,
        cdate: user.datenaissance,
        cemail: user.email,
        cmotdepasse: user.motdepasse
      });
    },
    errors => { console.log(errors); }
  )
  } 
  get cnom() {
    return this.myform.get("cnom");
  }
  get cprenom() {
    return this.myform.get("cprenom");
  }
  get ccin() {
    return this.myform.get("ccin");
  }
  get cemail() {
    return this.myform.get("cemail");
  }
  get ctel() {
    return this.myform.get("ctel");
  }
  get cmotdepasse() {
    return this.myform.get("cmotdepasse");
  }
  get cdate() {
    return this.myform.get("cdate");
  }

  saveupdate() { 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.Id = this.jwtHelper.decodeToken(this.token).User_Id; ; // tjib l id mta3 l 3abd l cncte lezm
    let data = this.myform.value;
    let role="apprenant"
    let userprofile = new User( this.Id ,data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse ,role );
    this.serviceuser.updateuser(userprofile).subscribe(
      result => { this.route.navigate(['/profil']) },
      errors => { console.log(errors) }

    )

  }

}

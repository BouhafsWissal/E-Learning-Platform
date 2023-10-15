import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-add-gestionnaire',
  templateUrl: './add-gestionnaire.component.html',
  styleUrls: ['./add-gestionnaire.component.css']
})
export class AddGestionnaireComponent implements OnInit {
  [x: string]: any;
  myform: FormGroup
  token: any;
  Id: any;
  constructor(private fb: FormBuilder,private serviceuser :ServiceuserService, private router: Router,  public jwtHelper: JwtHelperService)  {
    let FormControls = {
      cnom: new FormControl('', [
        Validators.required, Validators.minLength(3)]),
      cprenom: new FormControl('', [
        Validators.required, Validators.minLength(3)]),
      ccin: new FormControl('', [
        Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      cmotdepasse: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cemail: new FormControl('', [Validators.required, Validators.email]),
      ctel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      cdate: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls ,);
  }

  ngOnInit(): void { const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  this.token = currentUser && currentUser.token;
  this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 
  this.role = this.jwtHelper.decodeToken(this.token).roles; 
  console.log(this.Id) ; 
  console.log(this.role) ; 
  
  
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
    return this.myform.get("cdate")
  }



  savegestionnaire() {
    let data = this.myform.value; 
    let role ="gestionnaire"
    let gest = new User(null, data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse,role);
    console.log(gest);
    this.serviceuser.adduser(gest).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/listegestionnaire']);
      },
      errors => { console.log(errors); }
    )
  }
}

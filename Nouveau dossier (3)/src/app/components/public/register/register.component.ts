import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  constructor(private fb: FormBuilder, private serviceuser: ServiceuserService, private router: Router) {
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
      cdate: new FormControl('', [Validators.required]),
      crole: new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);

  }


  ngOnInit(): void { 
    let loggedIn= this.serviceuser.isLoggedIn() ; 
    if (loggedIn){ 
      this.router.navigate(['/dashboard'])
    }
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
  get crole() {
    return this.myform.get("crole")
  }


  saveuser() {
    let data = this.myform.value;
    console.log(data);
    if (data.crole == "apprenant") {
      console.log("c'est un apprenant");
      let user = new User(null, data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse, "apprenant");
      console.log(user);
      this.serviceuser.adduser(user).subscribe(
        result => {
          console.log(result);
          this.router.navigateByUrl('/login')
        },
        errors => { console.log(errors); }
      )
    }
    else if (data.crole == "formateur") {
      console.log("c'est un formateur");
      let user = new User(null, data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse, "formateur");
      console.log(user);
      this.serviceuser.adduser(user).subscribe(
        result => {
          console.log(result);
          this.router.navigateByUrl('/login')
        },
        errors => { console.log(errors); }
      )
    }
    ;


  }

}

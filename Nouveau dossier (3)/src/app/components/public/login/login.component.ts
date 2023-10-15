import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';
import { UserAuth } from 'src/app/user-auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup
  token: any;
  Id: any;
  role: any;
  constructor(private fb: FormBuilder, private serviceuser: ServiceuserService , private router: Router,  public jwtHelper: JwtHelperService) {
    let FormControls = {

      cmotdepasse: new FormControl('', [
        Validators.required, Validators.minLength(6)
      ]),
      cemail: new FormControl('', [
        Validators.required, Validators.email]),

    }
    this.myform = this.fb.group(FormControls);
  }

  ngOnInit(): void { 
    
   /* let loggedIn= this.serviceuser.isLoggedIn() ; 
    if (loggedIn){ 
      this.router.navigate(['/dashboard'])
    }*/
  }
  get cemail() {
    return this.myform.get("cemail");

  }
  get cmotdepasse() {
    return this.myform.get("cmotdepasse");
  }
  authentifier() {
    let data = this.myform.value;
    let user = new UserAuth( data.cemail, data.cmotdepasse);
    console.log(user);
    this.serviceuser.loging(user).subscribe(
      res => {
        console.log(res); 
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.Id = this.jwtHelper.decodeToken(this.token).User_Id; 
        this.role = this.jwtHelper.decodeToken(this.token).roles; 
       /* console.log(this.Id) ; */
        console.log(this.role) ; 
        if (this.role=="apprenant"){ this.router.navigate(['/profil']);} 
         else if (this.role=="formateur"){ this.router.navigate(['/profil']);}
         else if (this.role=="gestionnaire"){ this.router.navigate(['/dashboard']);} 
         else if (this.role=="admin"){ this.router.navigate(['/dashboard']);}
       /* let token = res.token;
        localStorage.setItem("my token", token);*/

      },
      errors => { console.log(errors) }
    )

  }
}


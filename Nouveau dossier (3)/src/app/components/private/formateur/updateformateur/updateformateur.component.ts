import { Component, OnInit } from '@angular/core';
import {   FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms' ; 
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceformateurService } from 'src/app/serviceformateur.service';
import { ServiceuserService } from 'src/app/serviceuser.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-updateformateur',
  templateUrl: './updateformateur.component.html',
  styleUrls: ['./updateformateur.component.css']
})
export class UpdateformateurComponent implements OnInit {
  myform :FormGroup
  constructor(private fb :FormBuilder ,  private router: ActivatedRoute ,private serviceuser : ServiceuserService, private route: Router) {
    let FormControls={
      cnom: new FormControl('',[
        Validators.required , Validators.minLength(3) ] ) , 
      cprenom: new FormControl('',[
        Validators.required , Validators.minLength(3)  ,   ]) ,
      ccin: new FormControl('',[
      Validators.required,  Validators.minLength(8),Validators.maxLength(8) , Validators.pattern("[0-9]")   ]) ,
      cmotdepasse: new FormControl('',[Validators.required, Validators.minLength(6)] ), 
      cemail: new FormControl('', [Validators.required , Validators.email]) , 
      ctel: new FormControl('',[Validators.required,Validators.minLength(8), Validators.maxLength(8) ]) ,
      cdate: new FormControl('',[Validators.required])
    } 
    this.myform=this.fb.group(FormControls) ; 
   }

  ngOnInit(): void {
    let iduser = this.router.snapshot.params.id;
    this.serviceuser.getuserwithid(iduser).subscribe(
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
  get cnom(){ 
    return this.myform.get("cnom") ; 
   }
   get cprenom(){ 
    return this.myform.get("cprenom") ; 
   }
   get ccin(){ 
    return this.myform.get("ccin") ; 
   } 
   get cemail(){ 
    return this.myform.get("cemail") ; 
   } 
   get ctel(){ 
    return this.myform.get("ctel") ; 
   }
   get cmotdepasse(){ 
    return this.myform.get("cmotdepasse") ; 
   } 
   get cdate(){ 
    return this.myform.get("cdate") ; 
   }

   
   saveupdate() {
    let iduser = this.router.snapshot.params.id;
    let data = this.myform.value;
    let formateur = new User( iduser ,data.cnom, data.cprenom, data.ccin, data.cemail, data.ctel, data.cdatanaissance, data.cmotdepasse,"formateur");
    this.serviceuser.updateuser(formateur).subscribe(
      result => { this.route.navigate(['/listeformateur']) },
      errors => { console.log(errors) }

    )
  }

}

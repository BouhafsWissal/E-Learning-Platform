import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/reclamation';
import { ServicereclamationService } from 'src/app/servicereclamation.service';
@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent implements OnInit {
  myform: FormGroup;
  constructor(private fb: FormBuilder , private servicereclamation : ServicereclamationService , private router : Router) {
    let FormControls = {

     theme: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),
      texte : new FormControl('', [Validators.required])
    }
    this.myform = this.fb.group(FormControls);

  }

  ngOnInit(): void {
  }
  get email() {
    return this.myform.get("email");
  }
  get theme() {
    return this.myform.get("theme");
  } 
  get texte() {
    return this.myform.get("texte");
  } 

  addreclamation(){
    let data = this.myform.value;
    let reclamation = new Reclamation( null,data.theme, data.texte ,data.email);
    console.log(reclamation); 
    this.servicereclamation.addreclamation(reclamation).subscribe(
      result =>{ console.log(result)  ;   
        this.router.navigate(['/listereclamation']) ; 
      }, 
      errors =>{ console.log(errors) ;  }
    )
  }
  }
 


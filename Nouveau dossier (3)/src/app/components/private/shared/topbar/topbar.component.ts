import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/serviceuser.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
 isLoggedIn :boolean ; 
  constructor( private serviceuser :ServiceuserService , private router: Router) { }

  ngOnInit(): void { 
    this.isLoggedIn=this.serviceuser.isLoggedIn(); 
  }
logout(){
  localStorage.removeItem("currentUser") ; 
  this.router.navigate(['/login']) ; 
}
}

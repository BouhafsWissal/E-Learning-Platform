import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
peoplelist=[ 
  {
  id :1 ,  
  name :"wissal" , 
  username:"bouhafs" , 
  phone :"28389372" 
  }, 
  {
    id :2 , 
    name :"xxx" , 
    username:"yyyy" , 
    phone :"98830320" 
    }, 
  {
   id :3 , 
   name : "llll" , 
   username : " mmmm", 
   phone : "22276245"



  },
  
]
  constructor() { }

  ngOnInit(): void {
  }
 delete(person){
   let index = this.peoplelist.indexOf(person) ; 
   this.peoplelist.splice(index,1) ;
 }
}

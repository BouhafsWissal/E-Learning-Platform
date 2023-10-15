import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceformateurService {

  constructor(private http: HttpClient) { } 

  getallformateur() {
    let data = this.http.get<any>("http://localhost:8081/formateur");
    return data;
  }
  deleteaformateur(id: String) {
    return this.http.delete<any>("http://localhost:8081/formateur/" + id);
  }  
  getformateurwithid (id :string) { 
    return this.http.get<any>("http://localhost:8081/formateur/" +id)
  } 
  updateformateur(formateur : User){ 
    return this.http.put<any>("http://localhost:8081/formateur" , formateur) 
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServicegestionnaireService {

  constructor(private http: HttpClient) { }

  getallgestionnaire() {
    let data = this.http.get<any>("http://localhost:8081/gestionnaire");
    return data;
  }
  deletegestionnaire(id: String) {
    return this.http.delete<any>("http://localhost:8081/gestionnaire/" + id);
  } 
  addgestionnaire(gest: User) { 
    return this.http.post<any>("http://localhost:8081/gestionnaire" , gest)
  }  
  getuserwithid (id :string) { 
    return this.http.get<any>("http://localhost:8081/gestionnaire/" +id)
  } 
  updategestionnaire(gest : User){ 
    return this.http.put<any>("http://localhost:8081/gestionnaire" , gest) 
  }
}

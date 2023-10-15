import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from './reclamation';
@Injectable({
  providedIn: 'root'
})
export class ServicereclamationService {

  constructor(private http: HttpClient) { } 
  getallreclamation() {
    let data = this.http.get<any>("http://localhost:8081/reclamation");
    return data;
  } 
  addreclamation(reclamation : Reclamation) { 
    return this.http.post<any>("http://localhost:8081/reclamation" , reclamation)
  }   
 deletereclamationwithid(id: String) {
    return this.http.delete<any>("http://localhost:8081/reclamation/" + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceapprenantService {

  constructor(private http: HttpClient) { } 
  getallapprenant() {
    let data = this.http.get<any>("http://localhost:8081/apprenant");
    return data;
  }
  deleteapprenant(id: String) {
    return this.http.delete<any>("http://localhost:8081/apprenant/" + id);
  }  
  getapprenantwithid (id :string) { 
    return this.http.get<any>("http://localhost:8081/apprenant/" +id)
  } 
  updateapprenant(apprenant : User){ 
    return this.http.put<any>("http://localhost:8081/gestionnaire" , apprenant) 
  }
}


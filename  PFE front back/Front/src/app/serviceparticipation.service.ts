import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participation } from './participation';

@Injectable({
  providedIn: 'root'
})
export class ServiceparticipationService {

  constructor(private http: HttpClient) { } 
  getallparticipation() {
    let data = this.http.get<any>("http://localhost:8081/participation");
    return data;
  }
  deleteparticipation(id: String) {
    return this.http.delete<any>("http://localhost:8081/participation/" + id);
  } 
  addparticipation(participation:Participation) { 
    return this.http.post<any>("http://localhost:8081/participation" , participation)
  }  
  getparticipationwithidapprenantandetat (id :string ,etat :string) { 
    return this.http.get<any>("http://localhost:8081/participation/" +id+"/" +etat)
  } 
  updateparticipation(participation:Participation){ 
    return this.http.put<any>("http://localhost:8081/participation" , participation) 
  }
  getparticipationwithid (id :string) { 
    return this.http.get<any>("http://localhost:8081/participation/" +id)
  } 
}

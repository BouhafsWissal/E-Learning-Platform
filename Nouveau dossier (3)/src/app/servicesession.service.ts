import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from './session';



@Injectable({
  providedIn: 'root'
})
export class ServicesessionService {

  constructor(private http: HttpClient) { }

  getallsession() {
    let data = this.http.get<any>("http://localhost:8081/session");
    return data;
  }
  deletesession(id: String) {
    return this.http.delete<any>("http://localhost:8081/session/" + id);
  } 
  addsession(session : Session) { 
    return this.http.post<any>("http://localhost:8081/session" , session)
  }  
  getsessionwithid (id :string) { 
    return this.http.get<any>("http://localhost:8081/session/" +id)
  } 
  updatesession(session : Session){ 
    return this.http.put<any>("http://localhost:8081/session" , session) 
  } 
  getsessionwithidformaateur(idformateur:string){
    return this.http.get<any>("http://localhost:8081/session/formateur/" +idformateur)
  }
}

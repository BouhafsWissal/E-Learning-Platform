import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ServicemessageService {

  constructor(private http: HttpClient) { }
  addmessage(msg: Message) { 
    return this.http.post<any>("http://localhost:8081/message" , msg)
  }  
  deletemessage (id :string) { 
    return this.http.delete<any>("http://localhost:8081/message/" +id)
  }  
  getmessagewithidrecepteur(id:string){ 
    return this.http.get<any>("http://localhost:8081/message/" +id)
  }
}

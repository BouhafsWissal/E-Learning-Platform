import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluation } from './evaluation';

@Injectable({
  providedIn: 'root'
})
export class ServiceevaluationService {

  constructor(private http: HttpClient ) {  } 

addevaluation(evaluation: Evaluation) { 
  return this.http.post<any>("http://localhost:8081/evaluer" , evaluation)
} 
getevaluation(idsession: number) { 
  return this.http.get<any>("http://localhost:8081/evaluer/" +idsession)
}
}
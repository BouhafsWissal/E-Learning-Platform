import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAuth } from './user-auth';
@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {
  private loggedIn: boolean;
  token: string;
  private role: any;
  private sub: string;
  ID: String ;
  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { }
  getallusers() {
    let data = this.http.get<any>("http://localhost:8081/user");
    return data;
  }
  deleteuserwithid(id: String) {
    return this.http.delete<any>("http://localhost:8081/user/" + id);
  }

  getuserwithidandrole(id: string, role: string) {
    return this.http.get<any>("http://localhost:8081/user/" + id + "/" + role)
  }
  updateuser(user: User) {
    return this.http.put<any>("http://localhost:8081/user", user)
  }
  getuserwithid(id: string) {
    return this.http.get<any>("http://localhost:8081/user/" + id)
  }
  getuserswithrole(role: string) {
    return this.http.get<any>("http://localhost:8081/user/role/" + role)
  }

  //Regester
  adduser(user: User) {
    return this.http.post<any>("http://localhost:8081/user/register", user)
  }
  //login
 /* login(user: User) : Observable<boolean> {
    return this.http.post<any>("http://localhost:8081/login", user)
  }*/

  loging(user: UserAuth): Observable<boolean> {
   /* return this.http.post(this.loginUserUrl, JSON.stringify({ email: email , password: password }), { observe: 'response' })*/
    return this.http.post("http://localhost:8081/login", user, { observe: 'response' })
      .pipe(map ((response: HttpResponse<any>) => {
        console.log(response) ;
        const token = response.headers.get('Authorization') ;
        console.log(token);
        this.loggedIn = true;

        // login successful if there's a jwt token in the response
        // let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          const jwtHelper  = new JwtHelperService();

          this.role = jwtHelper.decodeToken(this.token).roles;
          this.ID = jwtHelper.decodeToken(this.token).User_Id;
          console.log(jwtHelper.decodeToken(this.token).roles);
          console.log(jwtHelper.decodeToken(this.token).User_Id);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ ID: this.ID , role: this.role, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  //fonction pour co nectre s'il ya un user connecté ou pas /besh yestaamlha f login w register
  isLoggedIn() { 

    let token = localStorage.getItem("my token"); 

    if (token) { return true; }
    else { return false; }


  }
}

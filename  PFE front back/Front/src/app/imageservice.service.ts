import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  constructor(private http: HttpClient) { } 
  getallpictures() {
    let data = this.http.get<any>("http://localhost:8081/image/get/all");
    return data;
  }

}

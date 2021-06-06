import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
}

@Injectable({
  providedIn: 'root'
})
export class RegistorServiceService {

  URL: string = "http://localhost:9090/api/";

  constructor(
    private http: HttpClient

  ) { }

  sendDataToServer(data) {
    var formData = new FormData();
    formData.append("file", data.profileImage);
    formData.append("obj", data.name);
   
    console.log("--inside service-- calling service : " + this.URL + "/passdata");
    this.http.post(this.URL + "/passdata", formData).subscribe(
      data => {
      alert(data);
      }
    );
  }
}

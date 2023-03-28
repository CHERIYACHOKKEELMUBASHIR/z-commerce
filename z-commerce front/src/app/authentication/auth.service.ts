import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(name:any,password:any) {
    console.log("user:",name,password);
    
    const data={
      "name":name,
      "password":password
    }
    console.log("DATA",data)
    return this.http.post('http://localhost:3000/login',data)
  }
}

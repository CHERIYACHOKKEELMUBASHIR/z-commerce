import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addproduct(productname:any,category:any,description:any,price:any,imgToUrl:any):Observable <any>{
    const data={
        productname,
        description,
        imgToUrl,
        price,
        category,
        status:'pending'
    }
   return this.http.post('http://localhost:3000/user/addproduct',data)

}
}

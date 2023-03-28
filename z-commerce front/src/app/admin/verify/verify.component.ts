import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {

  constructor(private http:HttpClient){}

  name: any;
  description: any
  price: any
  Category:any
  status: any
  type:any
  dataSource:any=[]

  ngOnInit(){
    this.getItems()
  }

  getItems(){
    return this.http.get("http://localhost:3000/admin")
    .subscribe((result)=>{
      console.log("csdhgd",result);
      this.dataSource=result
       
    })
  }

  approved(productname:any){
    return this.http.put(`http://localhost:3000/admin/status`,{productname})
    .subscribe((result)=>{  
      console.log("csdhgḍfsfwed",result);
       
    })
  }


  verify(productname:any){
    return this.http.put("http://localhost:3000/admin/verify",{productname})
    .subscribe((result)=>{  
      console.log("csdhgd",result);
       
    })
  }

}

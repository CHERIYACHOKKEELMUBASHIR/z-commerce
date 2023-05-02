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
    this.type=JSON.parse(localStorage.getItem('type')||'')
    this.getItems()
    
  }

  getItems(){
    return this.http.get("http://localhost:3000/admin")
    .subscribe((result)=>{
      this.dataSource=result
       
    })
  }

  approved(productname:any){
    return this.http.put(`http://localhost:3000/admin/status`,{productname})
    .subscribe((result)=>{  
      console.log("csdhgḍfsfwed",result);
      location.reload()
       
    })
  }


  verify(productname:any){
    return this.http.put("http://localhost:3000/admin/verify",{productname})
    .subscribe((result)=>{  
      console.log("csdhgd",result);
      location.reload()
       
    })
  }

  delete(name:any){

    const con=confirm('do you want to delete '+name)
      if(con){
        this.http.delete(`http://localhost:3000/admin/delete/${name}`)
        .subscribe((result)=>{
          console.log(result);
          location.reload()  
        })
      }}

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent{
  data:any
  // type:any

  constructor(private http:HttpClient){}


  ngOnInit(){
    this.getItems()
  }


  getItems(){
    return this.http.get("http://localhost:3000/admin")
    .subscribe((result)=>{
      this.data= result  
      console.log("csdhgd",result);
       
    })
  }

  
  
}

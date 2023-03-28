import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  price: number;
  totalprice: number;
  gstprice:number;
  discount:number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  displayedColumns: string[] = ['name', 'price', 'totalprice','viewbill','action'];
  dataSource:any

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get(`http://localhost:3000/user/list`)
    .subscribe((result)=>{
      console.log(result);
      
      this.dataSource=result
    })
  }
  delete(item:any){
    const con=confirm('do you want to delete '+item)
    if(con){
      this.http.post(`http://localhost:3000/user/delete`,{name:item})
      .subscribe((result)=>{
        console.log(result);
        location.reload()  
      })
    }
  }
}

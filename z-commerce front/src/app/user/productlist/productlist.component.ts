import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
data:any
constructor(private http:HttpClient,private rout:Router){}


toCart(item:any){
  var total=(item.price)+((item.price/100)*18)
  var discount=(total/100)*5
  console.log(total,discount);
  
  const data={
    name:item.productname,
    gstprice:total,
    totalprice:total-discount,
    price: item.price,
    discount:discount,
    discription:item.description,
  }
  return this.http.post("http://localhost:3000/user/addtocart",data)
  .subscribe((result)=>{
    this.data= result
    this.rout.navigateByUrl('user/cart')
  })
}
ngOnInit(){
  this.getItems()
}
getItems(){
  return this.http.get("http://localhost:3000/user")
  .subscribe((result)=>{
    this.data= result   
  })
}
addproduct(){
  this.rout.navigateByUrl('user/addproduct')
}
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {

  pname:any
  category:any
  discription:any
  price:any
  photo:any

  constructor(private srv:UserService,private rout:Router){}

  addproduct() {
    this.srv.addproduct(this.pname,this.category,this.discription,this.price,this.photo)
    .subscribe((result:any)=>{
      alert(result.msg)
      this.rout.navigateByUrl('user')
    
    })
    
  }
}

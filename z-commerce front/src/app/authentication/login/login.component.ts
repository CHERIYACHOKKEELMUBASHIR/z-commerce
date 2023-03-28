import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  name:any;
  password:any

  constructor(private service:AuthService,private rout:Router){}

  ngOnInit() {

    
  }
  login() {
    var name = this.name
    var password = this.password
    this.service.login( name, password )
      .subscribe((user: any) => {
        if (user.data.length!=0) {
          // alert(user.message)o
          
          localStorage.setItem("type", JSON.stringify(user.data[0].type))

          if (user.data[0].type == "admin" || user.data[0].type == "super") {
          localStorage.setItem("name", JSON.stringify(user.data[0].name))
            this.rout.navigateByUrl('admin')
          } else {
            localStorage.setItem("username", JSON.stringify(user.data[0].name))
            this.rout.navigateByUrl('user')
          }
        } else {
          alert("can't connect you")
        }
      }, (user: any) => {
        alert(user.error.message)
        location.reload()
      })


  }
}



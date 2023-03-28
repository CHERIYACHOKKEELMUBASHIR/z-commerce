import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private rout:Router){}
  // name=''
  // type=""
  ngOnInit(){
    // this.name=JSON.parse(localStorage.getItem('name')||'')
    // this.type=JSON.parse(localStorage.getItem('type')||'')
  }
logout(){
    const logout=confirm('PRESS OK TO LOGOUT')
      if(logout){
    localStorage.removeItem('username')
    this.rout.navigateByUrl('')
      }
}
}

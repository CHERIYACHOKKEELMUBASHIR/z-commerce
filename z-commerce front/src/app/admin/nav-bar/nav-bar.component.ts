import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private rout:Router){}


  logout(){
    const logout=confirm('PRESS OK TO LOGOUT')
      if(logout){
    localStorage.removeItem('username')
    this.rout.navigateByUrl('')
      }
}



}

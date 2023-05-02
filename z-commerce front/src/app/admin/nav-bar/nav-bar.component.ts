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
    const logout=confirm('Are you sure want to logout')
      if(logout){
    localStorage.removeItem('username')
    this.rout.navigateByUrl('')
      }
}



}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  
   {
    path:'',
     loadChildren:()=>import('./authentication/authentication.module')
     .then(ndl=>ndl.AuthenticationModule)
   },
   {
    path:'admin',
     loadChildren:()=>import('./admin/admin.module')
     .then(ndl=>ndl.AdminModule)
   },
   {
    path:'user',
     loadChildren:()=>import('./user/user.module')
     .then(ndl=>ndl.UserModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

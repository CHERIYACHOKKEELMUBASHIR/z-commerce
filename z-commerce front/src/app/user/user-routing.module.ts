import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'',
  component:ProductlistComponent},
  {path:'cart',
  component:CartComponent},
  {path:'addproduct',
  component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

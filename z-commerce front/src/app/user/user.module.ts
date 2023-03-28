import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ProductlistComponent,
    CartComponent,
    AddproductComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[
    UserRoutingModule
  ]
})
export class UserModule { }

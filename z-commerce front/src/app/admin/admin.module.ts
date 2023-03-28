import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { AdminRoutingModule } from './admin-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductViewComponent,
    VerifyComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule

  ],
  exports:[
    VerifyComponent,
    AdminRoutingModule

  ]
})
export class AdminModule { }

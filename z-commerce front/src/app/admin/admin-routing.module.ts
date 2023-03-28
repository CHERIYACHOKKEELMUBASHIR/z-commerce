import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path:'',
    component:ProductViewComponent
  },
  {
    path:'verify',
    component:VerifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

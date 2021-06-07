import { SharedModule } from './../shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent  ],
  imports: [
   
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id', canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ],
  exports: [ProductDetailComponent,
    ProductListComponent]
})
export class ProductModule { }

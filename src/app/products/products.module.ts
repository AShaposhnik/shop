import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ProductsModule {
}

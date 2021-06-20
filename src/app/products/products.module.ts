import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ProductComponent, ProductListComponent, ProductViewComponent} from './components';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}

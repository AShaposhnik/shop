import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartListComponent, CartItemComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  exports: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule {
}

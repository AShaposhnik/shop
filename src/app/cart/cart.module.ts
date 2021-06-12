import {NgModule} from '@angular/core';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';
import {CartListComponent} from './components/cart-list/cart-list.component';


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
    SharedModule
  ]
})
export class CartModule {
}

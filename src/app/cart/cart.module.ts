import { NgModule } from '@angular/core';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    CartItemComponent
  ],
  exports: [
    CartItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CartModule { }

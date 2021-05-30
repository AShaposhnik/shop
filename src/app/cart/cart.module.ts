import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }

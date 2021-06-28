import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [
    ProcessOrderComponent
  ],
  imports: [
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule {
}

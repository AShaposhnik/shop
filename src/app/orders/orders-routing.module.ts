import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { IsCartEmptyGuard } from '../cart/guards/cart-empty.guard';


const routes: Routes = [
  {
    path: '',
    component: ProcessOrderComponent,
    canActivate: [IsCartEmptyGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}

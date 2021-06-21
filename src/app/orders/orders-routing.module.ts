import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { IsCartEmptyGuard } from '../cart/guards/cart-empty.guard';


const routes: Routes = [
  {
    path: 'order',
    component: ProcessOrderComponent,
    canLoad: [IsCartEmptyGuard],
    canActivate: [IsCartEmptyGuard],
    loadChildren: () => import('./orders.module').then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}

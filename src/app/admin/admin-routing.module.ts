import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {
  ManageOrdersComponent,
  ManageProductsComponent,
  AdminDashboardComponent,
  ProductFormComponent,
  ProductComponent
} from './components';
import { AuthGuard, CanDeactivateGuard } from '../core';
import { HasRoleAdminGuard } from './guards/admin-role.guard';
import { ProductResolveGuard } from './guards/product-resolve.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, HasRoleAdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'orders', component: ManageOrdersComponent },
          { path: 'products', component: ManageProductsComponent },
          {
            path: 'product',
            children: [
              { path: 'add', component: ProductFormComponent },
              {
                path: 'edit/:productID',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                  product: ProductResolveGuard
                }
              }
            ]
          },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    ProductComponent,
    AdminDashboardComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    ProductFormComponent
  ];
}

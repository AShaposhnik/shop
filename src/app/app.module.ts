import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './core/components/first/first.component';
import {CartModule} from './cart/cart.module';
import {SharedModule} from './shared/shared.module';
import {ProductsModule} from './products/products.module';
import { Router } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    LayoutModule,
    SharedModule,
    // must be last
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

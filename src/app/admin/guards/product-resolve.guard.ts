import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { delay, map, catchError, finalize, take } from 'rxjs/operators';

import { SpinnerService } from '../../widgets';
import { ProductModel } from '../../products/models/product.model';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel | null> {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private spinner: SpinnerService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    console.log('UserResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new ProductModel());
    }

    this.spinner.show();
    const id = route.paramMap.get('productID');

    if (id === null) {
      this.spinner.hide();
      return of(null);
    }

    return this.productService.getProduct(id).pipe(
      delay(2000),
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/admin/products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/admin/products']);
        // catchError MUST return observable
        return of(null);
      }),
      finalize(() => this.spinner.hide())
    );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlTree, UrlSegment, Route } from '@angular/router';
import { CartService } from '..';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate, CanLoad {
  constructor(private cartService: CartService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('IsCartEmptyGuard CanActivate has been called!');
    return !this.cartService.isEmptyCart();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('IsCartEmptyGuard CanLoad has been called!');
    return !this.cartService.isEmptyCart();
  }

}

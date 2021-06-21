import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlTree, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core';
import { UserRole } from '../../core/models/user-role';


@Injectable({
  providedIn: 'root'
})
export class HasRoleAdminGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('HasRoleAdminGuard CanActivate has been called!');
    return this.authService.hasRole(UserRole.ADMIN);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('HasRoleAdminGuard CanLoad has been called!');
    return this.authService.hasRole(UserRole.ADMIN);
  }

}

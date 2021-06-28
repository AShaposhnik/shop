import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core';
import { UserRole } from '../../core/models/user-role';


@Injectable({
  providedIn: 'root'
})
export class HasRoleAdminGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('HasRoleAdminGuard CanActivate has been called!');
    return this.hasRoleAdmin();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('HasRoleAdminGuard CanLoad has been called!');
    return this.hasRoleAdmin();
  }

  private hasRoleAdmin(): boolean {
    if (this.authService.hasRole(UserRole.ADMIN)) {
      return true;
    }

    this.router.navigate(['/forbidden-403']);
    return false;
  }

}

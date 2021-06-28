import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../core';
import { UserRole } from '../../../core/models/user-role';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  roles = [UserRole.ADMIN.toString(), UserRole.USER.toString()];
  selectedRole = UserRole.USER.toString();

  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.setMessage();
  }

  ngOnDestroy(): void {
    console.log('[takeUntil ngOnDestroy]');
    // this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLogin(role: string): void {
    this.message = 'Trying to log in ...';

    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/products-list';

          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };

    const userRole: UserRole = role === UserRole.ADMIN.toString()
      ? UserRole.ADMIN
      : UserRole.USER;

    this.authService
      .login(userRole)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout(): void {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage(): void {
    this.message = this.authService.isLoggedIn
      ? `Logged in as ${this.authService.role}`
      : `Logged out`;
  }
}

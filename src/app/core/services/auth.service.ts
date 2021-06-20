import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  role: UserRole;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(role: UserRole): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        this.role = role;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

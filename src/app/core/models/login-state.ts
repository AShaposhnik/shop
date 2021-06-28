import { UserRole } from './user-role';

export interface LoginState {
  isLoggedIn: boolean;
  role: UserRole;
}

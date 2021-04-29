import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate() {
    if (!this._authService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/board']);
      return false
    }
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth-response';
import { LoginForm } from '../interfaces/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.apiURL 
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data: LoginForm): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.URL}/login`, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }
}

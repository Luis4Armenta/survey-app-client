import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/interfaces/login-form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: LoginForm = {
    username: '',
    password: ''
  }
  constructor(
    private _authService: AuthService,
    private _router: Router
    ) { }

  login() {
    console.log('esto es loginForm', this.loginForm)
    this._authService.login(this.loginForm).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('expiresIn', res.expiresIn.toString());

      this.loginForm = {
        username: '',
        password: ''
      };

      this._router.navigate(['/dddasda']);
    });
  }

}
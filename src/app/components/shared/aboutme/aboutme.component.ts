import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(private readonly autService: AuthService) { }

  ngOnInit(): void {
  }

  isLogin(): boolean {
    return this.autService.loggedIn()
  }

}

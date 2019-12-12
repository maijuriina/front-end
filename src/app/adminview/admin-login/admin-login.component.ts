import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  // forwards username and password to the authentication service
  onLogin(username, password) {
    this.loginService.login(username.value, password.value);
  }
}

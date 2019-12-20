import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  userEmail$: Observable<string>;

  constructor(private service: AuthenticationService) {
  }

  ngOnInit() {
    this.userEmail$ = this.service.checkLoggedInUser();
  }

  signOut() {
    // calls function inside service
    this.service.signOut();
  }
}

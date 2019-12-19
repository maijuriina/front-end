import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  signOut() {
    // calls function inside service
    this.service.signOut();
  }
}

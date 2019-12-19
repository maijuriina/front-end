import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  private currentUser: BehaviorSubject<string>;

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    this.currentUser = this.service.checkLoggedInUser();
  }
}

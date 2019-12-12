import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AdminViewComponent} from '../adminview/admin-view/admin-view.component';
import {Router, RouterModule, Routes} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) {
  }

  login(username: string, password: string) {
    // then() checks if login returns an OK as result, if not, it catches error
  return firebase.auth().signInWithEmailAndPassword(username, password).then(result => {
    this.router.navigate(['adminView']);
  }).catch(err => {
      // Handle Errors here
    alert(err.message);
    });
  }

  logout() {

  }
  getLoggedInUser() {

  }

  checkLoggedInUser() {

  }
}

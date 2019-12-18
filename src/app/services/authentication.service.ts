import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AdminViewComponent} from '../adminview/admin-view/admin-view.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user != null) {
        this.userEmail.next(user.email);
      }
    });
  }
  // uusi käyttäjä: admina.autenttinen@gmail.com, pw Admina1234
  login(username, password) {
    // then() checks if login returns an OK as result, if not, it catches error
  return this.afAuth.auth.signInWithEmailAndPassword(username, password).then(result => {
    this.router.navigate(['adminView']);
  }).catch(err => {
      // Handle Errors here
    alert(err.message);
    });
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.userEmail.next('');
      this.router.navigate(['feedback']);
    });
  }
  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() {
    return this.userEmail;
  }
}

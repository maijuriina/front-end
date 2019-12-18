import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import { Observable } from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(  public authenticationService: AuthenticationService, public router: Router ) {
}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authenticationService.getLoggedInUser().pipe(
      take(1),
      map(authState => Boolean(authState)),
      tap(auth => !auth ? this.router.navigate(['adminView']) : true) // checks through service and there from FireBase
    );
  }
}

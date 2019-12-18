import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {CalculatorComponent} from '../calculator/calculator.component';
import {FeedbackComponent} from '../feedback/feedback.component';
import {FormComponent} from '../template-form/form.component';
import {ReactiveFormComponent} from '../reactive-form/reactive-form.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {FinnkinoComponent} from '../finnkino/finnkino.component';
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

    /* const appRoutes: Routes = [
      { path: 'calculator', component: CalculatorComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'template-form', component: FormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path : 'finnkino', component: FinnkinoComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: '', component: PageNotFoundComponent }
    ]; */
  }

  signOut() {
    // calls function inside service
    this.service.signOut();
}
}

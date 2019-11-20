import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {CalculatorComponent} from '../calculator/calculator.component';
import {FeedbackComponent} from '../feedback/feedback.component';
import {FormComponent} from '../template-form/form.component';
import {ReactiveFormComponent} from '../reactive-form/reactive-form.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {

    const appRoutes: Routes = [
      { path: 'calculator', component: CalculatorComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'template-form', component: FormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: '', component: PageNotFoundComponent }
    ];
  }
}

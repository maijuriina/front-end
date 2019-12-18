import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './template-form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FinnkinoComponent} from './finnkino/finnkino.component';
import {AdminLoginComponent} from './adminview/admin-login/admin-login.component';
import {AdminViewComponent} from './adminview/admin-view/admin-view.component';
import {AuthenticationGuard} from './authentication.guard';
import {ExchangeRatesComponent} from './exchange-rates/exchange-rates.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactiveForm', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'finnkino', component: FinnkinoComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminView', component: AdminViewComponent, canActivate: [AuthenticationGuard]},
  { path: 'exchangeRates', component: ExchangeRatesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

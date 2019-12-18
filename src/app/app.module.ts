import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { FeedbackComponent } from './feedback/feedback.component';
import {
  MatCardModule,
  MatCheckboxModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatSliderModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './template-form/form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FinnkinoComponent } from './finnkino/finnkino.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsFilterPipe } from './pipes/news-filter.pipe';
import { AdminLoginComponent } from './adminview/admin-login/admin-login.component';
import { AdminViewComponent } from './adminview/admin-view/admin-view.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    FormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    SidenavComponent,
    FinnkinoComponent,
    NewsFilterPipe,
    AdminLoginComponent,
    AdminViewComponent,
    ExchangeRatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    BrowserModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

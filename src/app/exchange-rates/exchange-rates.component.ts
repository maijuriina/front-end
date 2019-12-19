import { Component, OnInit } from '@angular/core';
import {RatesService} from '../services/rates.service';
import {Observable} from 'rxjs';
import {Currency} from './currency';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  ratesData$: Observable<any>;
  currency: Currency;

  constructor(private ratesService: RatesService) {
    // this.selected = new Currency('', 0);
  }

  ngOnInit() {
    this.ratesData$ = this.ratesService.getData();
  }

}

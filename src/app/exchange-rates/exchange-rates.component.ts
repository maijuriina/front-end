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
  ratesData$: Observable<Currency[]>;
  fromCurrency: Currency;
  toCurrency: Currency;
  exchangeRate: number;
  conversionValue: number;
  amount: number;
  result: number;
  rounded: string;

  constructor(private ratesService: RatesService) {
  }

  ngOnInit() {
    this.ratesData$ = this.ratesService.getData();
  }

  calculateRateExchange() {
    this.exchangeRate = Number(this.fromCurrency) / Number(this.toCurrency);
    this.conversionValue = 1 / this.exchangeRate;
    this.result = Number(this.amount) * Number(this.conversionValue);
    this.rounded = this.result.toFixed(2);
  }

}

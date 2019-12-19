import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../exchange-rates/currency';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  ratesUrl = 'https://api.exchangeratesapi.io/latest';
  currencies: Array<Currency>;

  constructor(private httpClient: HttpClient) {
    this.currencies = new Array<Currency>(); // creating new array
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.ratesUrl).pipe(map(response => {
      // for currency codes
      // console.log(Object.keys(response.rates));
      // for currency rate values
      // console.log(Object.values(response.rates));
      // @ts-ignore
      const objectArray = Object.entries(response.rates);
      // calls for banks' rates, which program doesn't know about so ts-ignored

      objectArray.forEach(([key, value]) => {
        // key is name of rate 'USD'
        // value is number rate
        this.currencies.push(new Currency(key, Number(value))); // pushing data to array;
      });
      return this.currencies;
    }));
  }
}

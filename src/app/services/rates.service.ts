import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../exchange-rates/currency';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';
import { HttpClient } from '@angular/common/http';
import {NewsItem} from '../finnkino/news-item';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  ratesUrl = 'https://api.exchangeratesapi.io/latest';
  private ratesData: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.ratesUrl).pipe(map(response => {
      // for currency codes
      // console.log(Object.keys(response.rates));
      // for currency rate values
      // console.log(Object.values(response.rates));

      const objectArray = Object.entries(response.rates);

      objectArray.forEach(([key, value]) => {
        console.log(key); // currency code
        console.log(value); // currency rate value
      });
    }));
  }
}

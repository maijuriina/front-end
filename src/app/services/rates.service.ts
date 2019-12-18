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
  currencyArray = this.getData();

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.ratesUrl).pipe(map(response => {
      // for currency codes
      // console.log(Object.keys(response.rates));
      // for currency rate values
      // console.log(Object.values(response.rates));
      // @ts-ignore
      const objectArray = Object.entries(response.rates);
      // calls for banks' rajapinnan rates, which program doesn't know about so ts-ignored

      objectArray.forEach(([key, value]) => {
        let currencyName = key;
        let currencyValue = value;
        return [currencyName, currencyValue];
      });
    }));
  }
}

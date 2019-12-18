import { Component, OnInit } from '@angular/core';
import {RatesService} from '../services/rates.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  ratesData$: Observable<any>;

  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.ratesData$ = this.ratesService.getData();

    // this.ratesService.getData().subscribe(result => {
      // console.log(result);
    // }, err => {
      // console.log(err);
    // }, () => {
      // console.log('Complete!');
    // });
  }
}

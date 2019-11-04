import { Component, OnInit } from '@angular/core';
import {clearElement} from '@angular/cdk/testing';
import {$} from 'protractor';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  calculation: any;

  pressKey(inputValue: string) {
    if (inputValue === 'C') {
      this.calculation = '';
    } else if (inputValue === '=') {
      if (this.calculation.endsWith('/') || this.calculation.endsWith('*') ||
        this.calculation.endsWith('+') || this.calculation.endsWith('-')) {
        alert('Syötä laskutoimituksen viimeinen luku!');
      } else {
        // tslint:disable-next-line:no-eval
        this.calculation = eval(this.calculation);
      }
    } else if (inputValue === '/' || inputValue === '*' || inputValue === '+' || inputValue === '-') {
      if (this.calculation.endsWith('/') || this.calculation.endsWith('*') ||
        this.calculation.endsWith('+') || this.calculation.endsWith('-')) {
      } else {
        this.calculation += inputValue;
      }
    } else {
      this.calculation += inputValue;
    }
  }

  constructor() {
    this.calculation = '';
  }

  ngOnInit() {
  }
}

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
  calculation: string;

  pressKey(inputValue: string) {
    if (inputValue === 'C') {
      this.calculation = '';
    } else if (inputValue === '=') {
      // tslint:disable-next-line:no-eval
      this.calculation = eval(this.calculation);
    } else {
      this.calculation = this.calculation + inputValue;
      console.log(this.calculation);
    }
  }

  constructor() {
    this.calculation = '';
  }

  ngOnInit() {
  }
}

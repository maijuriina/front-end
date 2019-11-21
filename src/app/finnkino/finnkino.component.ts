import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})

export class FinnkinoComponent implements OnInit {
  kinoData: any;

  constructor(private kinoService: NewsService) {
  }

  ngOnInit() {
    this.kinoData = this.kinoService.getData();
  }
}

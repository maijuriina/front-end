import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})

export class FinnkinoComponent implements OnInit {
  kinoData$: Observable<any>;
  searchTerm: any;

  constructor(private kinoService: NewsService) {
  }

  ngOnInit() {
    this.kinoData$ = this.kinoService.getData();
  }
}

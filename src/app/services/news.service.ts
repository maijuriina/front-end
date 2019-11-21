import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // newsUrl: 'https://www.finnkino.fi/xml/News/';

  constructor() { }

  // "observable" waits for an answer
  getData(): Observable<any> {
      return of ('testi');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from '../finnkino/news-item';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';
import { parseString } from 'xml2js';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = 'https://www.finnkino.fi/xml/News/';
  private newsData: Observable<any>;

  constructor(private httpClient: HttpClient) {
  }
  // "observable" waits for an answer
  getData(): Observable<any> {
    return this.httpClient.get(this.newsUrl, {responseType: 'text'}).pipe(map(response => {
      let newsData: NewsItem[] = [];
      // tslint:disable-next-line:only-arrow-functions
      parseString(response, {trim: true, explicitArray: false, mergeAttrs: true}, function(err, result) {
        newsData = result.News.NewsArticle;
      });
      return newsData;
    }));
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {
  transform(allNews: any, filter: string): any {
    if (!allNews || !filter) {
      return allNews;
      // returning all news if there are no search terms
    }
    return allNews.filter(news => (
      news.Title.toLowerCase().includes(filter.toLowerCase())
    ));
  }
}

export class NewsItem {
  title: string;
  lead: string;
  content: string;
  articleUrl: string;
  imageUrl: string;
  thumbnailUrl: string;
  articleCategory: string;

  constructor(title: string, lead: string, content: string, articleUrl: string, imageUrl: string, thumbnailUrl: string,
              articleCategory: string) {
    this.title = title;
    this.lead = lead;
    this.content = content;
    this.articleUrl = articleUrl;
    this.imageUrl = imageUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.articleCategory = articleCategory;
  }
}


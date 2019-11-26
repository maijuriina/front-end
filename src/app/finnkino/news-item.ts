export class NewsItem {
  Title: string;
  PublishDate: string;
  HTMLLead: string;
  HTMLContent: string;
  ArticleURL: string;
  ImageURL: string;
  ThumbnailURL: string;
  NewsArticleCategory: string;

  constructor(Title: string, PublishDate: string, HTMLLead: string, HTMLContent: string, ArticleURL: string, ImageURL: string,
              ThumbnailURL: string, NewsArticleCategory: string) {
    this.Title = Title;
    this.PublishDate = PublishDate;
    this.HTMLLead = HTMLLead;
    this.HTMLContent = HTMLContent;
    this.ArticleURL = ArticleURL;
    this.ImageURL = ImageURL;
    this.ThumbnailURL = ThumbnailURL;
    this.NewsArticleCategory = NewsArticleCategory;
  }
}


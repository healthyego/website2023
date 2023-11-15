import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Article} from "../article.type";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private dataUrl = '../../assets/data/articles.json';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.dataUrl)
  }

  getFiltered(filters: Set<string> | undefined): Observable<Article[]> {
    return this.getAll().pipe(
      map((articles) => (filters ? this.orFilter(articles, filters) : articles))
    );
  }

  getArticleById(id: string): Observable<Article | undefined> {
    return this.getAll().pipe(
      map((articles) => articles.find((article) => article.id === id))
    );
  }

  andFilter(articles: Array<Article>, filters: Set<string>): Array<Article> {
    return articles.filter((article) => {
      return Array.from(filters).every((filter) => article.keywords.includes(filter));
    });
  }

  //TODO: get this to work with filterbar
  orFilter(articles: Array<Article>, filters: Set<string>): Array<Article> {
    return articles.filter((article) => {
      return Array.from(filters).some((filter) => article.keywords.includes(filter));
    });
  }
}


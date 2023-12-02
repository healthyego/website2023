import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {Article} from "../article.type";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private dataUrl = 'https://healthyego.github.io/sources/data/articles.json';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.dataUrl)
  }

  getFiltered(filters: Set<string> | undefined): Observable<Article[]> {
    //necessary for showing everything on deselecting filters
    const shouldFilter = filters ? filters.size > 0 : false

    return this.getAll().pipe(
      map((articles) => ((shouldFilter) ? this.orFilter(articles, filters!!) : articles))
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

  orFilter(articles: Array<Article>, filters: Set<string>): Array<Article> {
    return articles.filter((article) => {
      return Array.from(filters).some((filter) => article.keywords.includes(filter));
    });
  }
}


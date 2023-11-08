import {Component} from '@angular/core';
import {Article} from "../shared/article.type";
import {Observable} from "rxjs";
import {selectArticles, selectSelectedFilter} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {state} from "../data-access/article.reducer";


@Component({
  selector: 'app-article-collection',
  templateUrl: './article-collection.component.html',
  styleUrls: ['./article-collection.component.scss'],
})
export class ArticleCollectionComponent {
  articles$: Observable<Array<Article>> = this.store.select(selectArticles)
  selectedFilters$: Observable<Set<string> | undefined> = this.store.select(selectSelectedFilter)

  constructor(private store: Store<{ state: state }>) {
  }
}

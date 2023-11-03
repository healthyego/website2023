import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {loadArticles, reset} from "../data-access/article.actions";
import {Article} from "../shared/article.type";
import {state} from "../data-access/article.reducer";
import {selectArticles, selectFilterOptions} from "../data-access/article.selector";


@Component({
  selector: 'app-article-collection',
  templateUrl: './article-collection.component.html',
  styleUrls: ['./article-collection.component.scss'],
})
export class ArticleCollectionComponent {
  articles$: Observable<Array<Article>> = this.store.select(selectArticles)
  filterOptions$: Observable<Set<string>> = this.store.select(selectFilterOptions)

  constructor(private store: Store<{ state: state }>) {
    this.store.dispatch(loadArticles());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

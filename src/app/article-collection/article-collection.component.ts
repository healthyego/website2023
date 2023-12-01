import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Article} from "../shared/article.type";
import {Observable} from "rxjs";
import {selectArticles, selectIsMobileView, selectSelectedFilter} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {state} from "../data-access/article.reducer";
import {selectArticle} from "../data-access/article.actions";


@Component({
  selector: 'app-article-collection',
  templateUrl: './article-collection.component.html',
  styleUrls: ['./article-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCollectionComponent {
  isMobileView$: Observable<boolean> = this.store.select(selectIsMobileView)
  articles$: Observable<Array<Article>> = this.store.select(selectArticles)
  selectedFilters$: Observable<Set<string> | undefined> = this.store.select(selectSelectedFilter)

  coverUrl: string | undefined | null

  constructor(private store: Store<{ state: state }>) {
  }

  selectArticle($event: Article) {
    this.store.dispatch(selectArticle({article: $event}))
  }

  displayCover($event: string | null){
    this.coverUrl = $event
  }
}

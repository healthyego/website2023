import {ChangeDetectionStrategy, Component} from '@angular/core';
import {selectIsMobileView, selectSelectedArticle} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {state} from "../data-access/article.reducer";
import {Observable} from "rxjs";


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent {
  isMobileView$: Observable<boolean> = this.store.select(selectIsMobileView)
  selectedArticles$ = this.store.select(selectSelectedArticle)

  constructor(
    private store: Store<{ state: state }>,
  ) {
  }
}

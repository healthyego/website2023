import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, withLatestFrom} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ArticleService} from "../article-collection/service/article.service";
import {loadArticles, loadArticlesSuccess, toggleFilter} from "./article.actions";
import {Article} from "../shared/article.type";
import {Store} from "@ngrx/store";
import {selectSelectedFilter} from "./article.selector";

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(loadArticles, toggleFilter),
      withLatestFrom(this.store.select(selectSelectedFilter)),
      exhaustMap(([action, filters]) => this.articleService.getAll(filters)
        .pipe(
          map(articles => loadArticlesSuccess({articles: articles})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private store: Store
  ) {
  }
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ArticleService} from "../article-collection/service/article.service";
import {loadArticles, loadArticlesSuccess} from "./article.actions";

@Injectable()
export class ArticleEffects {

  loadArticles$ = createEffect(() => this.actions$.pipe(
      ofType(loadArticles),
      exhaustMap(() => this.articleService.getAll()
        .pipe(
          map(articles => loadArticlesSuccess({articles: articles})),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {
  }
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, EMPTY, switchMap, tap, withLatestFrom} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ArticleService} from "../article-collection/service/article.service";
import {
  generalFailureAction,
  loadArticleById,
  loadArticles,
  loadArticlesByFilter,
  loadArticlesSuccess,
  selectArticle,
  toggleFilter,
  unselectArticle
} from "./article.actions";
import {Store} from "@ngrx/store";
import {selectSelectedFilter} from "./article.selector";
import {Router} from "@angular/router";

@Injectable()
export class ArticleEffects {
  loadArticles$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticles),
    exhaustMap(() =>
      this.articleService.getAll().pipe(
        map(articles => loadArticlesSuccess({articles})),
        catchError(() => EMPTY)
      )
    )
  ));

  loadArticleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticleById),
      switchMap(({id}) =>
        this.articleService.getArticleById(id).pipe(
          map(article =>
            article ? selectArticle({article}) : generalFailureAction({errorMessage: 'No article found'})
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  toggleFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleFilter),
      withLatestFrom(this.store.select(selectSelectedFilter)),
      map(([action, filters]) => loadArticlesByFilter({keywords: filters}))
    )
  );

  loadArticlesByFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticlesByFilter),
      exhaustMap(({keywords}) =>
        this.articleService.getFiltered(keywords).pipe(
          map(articles => loadArticlesSuccess({articles})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  navigateToArticle$ = createEffect(() =>
      this.actions$.pipe(
        ofType(selectArticle),
        tap(({article}) => {
          this.router.navigate(['/articles', article.id]).then(r => null);
        })
      ),
    {dispatch: false}
  );

  navigateToList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unselectArticle, generalFailureAction),
      tap(() => {
        this.router.navigate(['/articles']).then(r => null);
      }),
      concatMap(() => [loadArticles()])
    ),
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private store: Store,
    private router: Router,
  ) {
  }
}

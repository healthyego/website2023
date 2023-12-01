import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {
  selectFilterOptions,
  selectIsMobileView,
  selectSelectedArticle,
  selectSelectedFilter
} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {loadArticleById, loadArticles, toggleFilter, unselectArticle} from "../data-access/article.actions";
import {state} from "../data-access/article.reducer";
import {Article} from "../shared/article.type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {
  isMobileView$: Observable<boolean> = this.store.select(selectIsMobileView)
  filterOptions$: Observable<Set<string> | undefined> = this.store.select(selectFilterOptions)
  selectedFilter$: Observable<Set<string> | undefined> = this.store.select(selectSelectedFilter)
  selectedArticle$: Observable<Article | undefined> | undefined

  constructor(private store: Store<{ state: state }>, private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    //TODO: not too nice,
    // would rather have it in the effect,
    // but the activatedRoute is not available

    this.activatedRoute.firstChild?.paramMap
      .pipe(take(1))
      .subscribe(params => {
        const id = params.get('id');
        id ? this.store.dispatch(loadArticleById({id})) : this.store.dispatch(loadArticles());
      });

    this.selectedArticle$ = this.store.select(selectSelectedArticle)
  }

  filterToggled($event: string) {
    this.store.dispatch(toggleFilter({keyword: $event}))
  }

  unselectArticle() {
    this.store.dispatch(unselectArticle())
  }
}

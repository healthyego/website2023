import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {selectArticles, selectFilterOptions, selectSelectedFilter} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {loadArticles, toggleFilter} from "../data-access/article.actions";
import {state} from "../data-access/article.reducer";
import {Article} from "../shared/article.type";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  filterOptions$: Observable<Set<string> | undefined> = this.store.select(selectFilterOptions)
  articles$: Observable<Array<Article>> = this.store.select(selectArticles)
  selectedFilter$: Observable<Set<string> | undefined> = this.store.select(selectSelectedFilter)

  constructor(private store: Store<{ state: state }>) {
    this.store.dispatch(loadArticles());
  }

  filterToggled($event: string) {
    this.store.dispatch(toggleFilter({keyword: $event}))
  }
}

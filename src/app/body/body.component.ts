import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {selectFilterOptions, selectSelectedFilter} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {loadArticles, toggleFilter} from "../data-access/article.actions";
import {state} from "../data-access/article.reducer";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription | undefined;
  isListView: boolean | undefined
  filterOptions$: Observable<Set<string> | undefined> = this.store.select(selectFilterOptions)
  selectedFilter$: Observable<Set<string> | undefined> = this.store.select(selectSelectedFilter)

  constructor(private store: Store<{ state: state }>, private router: Router) {
    this.store.dispatch(loadArticles());
  }

  filterToggled($event: string) {
    this.store.dispatch(toggleFilter({keyword: $event}))
  }

  ngOnInit() {
    //TODO I dont really like this
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isListView = event.url === '/articles';
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe()
  }
}

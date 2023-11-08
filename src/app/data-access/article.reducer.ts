import {createReducer, on} from '@ngrx/store';
import {loadArticlesSuccess, toggleFilter} from './article.actions';
import {Article} from "../shared/article.type";
import {state} from "@angular/animations";

export interface state {
  articles: Array<Article>;
  filterOptions: Set<string> | undefined;
  selectedFilter: Set<string> | undefined;
}

export const initialState: state = {
  articles: [],
  filterOptions: undefined,
  selectedFilter: undefined
};

export const articleReducer = createReducer(
  initialState,
  on(loadArticlesSuccess, (state, {articles}) => ({
    ...state,
    articles: articles,
    filterOptions: new Set(articles.map((it) => it.keywords).flat())
  })),
  on(toggleFilter, (state, {keyword}) =>
    ({
      ...state,
      selectedFilter: addOrRemove(keyword, new Set(state.selectedFilter))
    })
  ),
);

function addOrRemove(keyword: string, keywords: Set<string>): Set<string> {
  keywords.has(keyword) ? keywords.delete(keyword) : keywords.add(keyword)
  return keywords;
}


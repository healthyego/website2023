import {createReducer, on} from '@ngrx/store';
import {loadArticlesSuccess, selectArticle, toggleFilter} from './article.actions';
import {Article} from "../shared/article.type";
import {state} from "@angular/animations";

export interface state {
  articles: Array<Article>;
  selectedArticle: Article | undefined;
  filterOptions: Set<string> | undefined;
  selectedFilter: Set<string> | undefined;
}

export const initialState: state = {
  articles: [],
  filterOptions: undefined,
  selectedFilter: undefined,
  selectedArticle: undefined
};

export const articleReducer = createReducer(
  initialState,
  on(loadArticlesSuccess, (state, {articles}) => ({
    ...state,
    articles: articles,
    filterOptions: new Set(articles.map((it) => it.keywords).flat()),
    selectedArticle: undefined
  })),

  on(toggleFilter, (state, {keyword}) =>
    ({
      ...state,
      selectedFilter: addOrRemove(keyword, new Set(state.selectedFilter))
    })
  ),
  on(selectArticle, (state, {article}) =>
    ({
      ...state,
      selectedArticle: article,
      filterOptions: new Set(article.keywords),
    })
  )
);

function addOrRemove(keyword: string, keywords: Set<string>): Set<string> {
  keywords.has(keyword) ? keywords.delete(keyword) : keywords.add(keyword)
  return keywords;
}


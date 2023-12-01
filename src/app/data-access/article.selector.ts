import {createFeatureSelector, createSelector} from '@ngrx/store';
import {state} from './article.reducer';

const selectFeature = createFeatureSelector<state>('state');
export const selectArticles = createSelector(selectFeature, (state) => state.articles);
export const selectSelectedArticle = createSelector(selectFeature, (state) => state.selectedArticle);
export const selectFilterOptions = createSelector(selectFeature, (state) => state.filterOptions);
export const selectSelectedFilter = createSelector(selectFeature, (state) => state.selectedFilter);
export const selectIsMobileView = createSelector(selectFeature, (state) => state.isMobileView);

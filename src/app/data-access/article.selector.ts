import {createSelector, createFeatureSelector} from '@ngrx/store';
import {state} from './article.reducer';

const selectFeature = createFeatureSelector<state>('state');
export const selectArticles = createSelector(selectFeature, (state) => state.articles);
export const selectFilterOptions = createSelector(selectFeature, (state) => state.filterOptions);
export const selectSelectedFilter = createSelector(selectFeature, (state) => state.selectedFilter);

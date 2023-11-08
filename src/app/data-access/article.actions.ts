import {createAction, props} from '@ngrx/store';
import {Article} from "../shared/article.type";

export const loadArticles = createAction('[Articles] load');
export const loadArticlesSuccess = createAction('[Articles] load success', props<{ articles: Array<Article> }>());
export const toggleFilter = createAction('[Filter] toggle', props<{ keyword: string }>());

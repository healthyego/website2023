import {createAction, props} from '@ngrx/store';
import {Article} from "../shared/article.type";

export const loadArticles = createAction('[Articles] load');
export const loadArticleById = createAction('[Articles] load by id', props<{ id: string }>());
export const loadArticlesByFilter = createAction('[Articles] load by filter', props<{ keywords: Set<string> | undefined }>());
export const loadArticlesByFilterSuccess = createAction('[Articles] load by filter success', props<{ articles: Array<Article> }>());
export const loadArticlesSuccess = createAction('[Articles] load success', props<{ articles: Array<Article> }>());


export const selectArticle = createAction('[Articles] select', props<{ article: Article }>());
export const unselectArticle = createAction('[Articles] unselect');


export const toggleFilter = createAction('[Filter] toggle', props<{ keyword: string }>());
export const generalFailureAction = createAction('[Failure] something went wrong', props<{ errorMessage: string }>());



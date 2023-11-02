import {createAction, props} from "@ngrx/store";
import {Article} from "../shared/article.type";

export const loadArticles = createAction('[Articles] Load');

export const loadArticlesSuccess = createAction('[Articles] Load', props<{ articles: Array<Article> }>());

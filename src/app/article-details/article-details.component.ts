import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Article} from "../shared/article.type";
import {selectArticleById, selectArticles} from "../data-access/article.selector";
import {Store} from "@ngrx/store";
import {state} from "../data-access/article.reducer";


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  articleId: string | undefined | null
  selectedArticles$: Observable<Article | undefined> | undefined

  constructor(
    private store: Store<{ state: state }>,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.selectedArticles$ = this.store.select(selectArticleById(this.articleId))
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../shared/article.type";


@Component({
  selector: 'app-article-collection',
  templateUrl: './article-collection.component.html',
  styleUrls: ['./article-collection.component.scss'],
})
export class ArticleCollectionComponent {
  @Input() articles: Array<Article> | undefined;
  @Input() selectedFilters: Set<string> | undefined;
  @Output() selectedArticle = new EventEmitter<Article>()

  constructor() {
  }
}

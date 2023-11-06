import {Component, Input} from '@angular/core';
import {Article} from "../shared/article.type";

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent {
  @Input() article!: Article;
  @Input() filters: Set<string> | undefined | null;
}

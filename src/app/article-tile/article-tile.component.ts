import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../shared/article.type";

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleTileComponent {
  @Input() article!: Article;
  @Input() filters: Set<string> | undefined | null;
  @Output() selectedArticle = new EventEmitter<Article>()
  @Output() coverOfHovered = new EventEmitter<string | null>()
  isHovered: boolean= false

  onSelect(article: Article) {
    this.selectedArticle.emit(article)
  }
  onMouseEnter(url: string){
    this.coverOfHovered.emit(url)
  }

  onMouseLeave(){
    this.coverOfHovered.emit(null)
  }
}

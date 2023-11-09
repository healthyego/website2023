import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent {
  @Input() filterOptions: Set<string> | undefined;
  @Input() selectedFilter: Set<string> | undefined;
  @Input() isArticleSelected: boolean | undefined;

  @Output() toggledFilter = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<void>();

  toggleFilter(keyword: string) {
    this.toggledFilter.emit(keyword)
  }

  onGoBack() {
    this.goBack.emit()
  }
}

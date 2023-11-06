import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  @Input() filterOptions: Set<string> | undefined;
  @Input() selectedFilter: Set<string> | undefined;
  @Output() toggledFilter = new EventEmitter<string>();

  toggleFilter(keyword: string) {
    this.toggledFilter.emit(keyword)
  }
}

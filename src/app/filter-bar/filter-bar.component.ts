import {Component, EventEmitter, Input, Output} from '@angular/core';
import {routesEnum} from "../app-routing.module";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  articleRoute =  routesEnum.ARTICLES
  @Input() filterOptions: Set<string> | undefined;
  @Input() selectedFilter: Set<string> | undefined;
  @Output() toggledFilter = new EventEmitter<string>();

  toggleFilter(keyword: string) {
    this.toggledFilter.emit(keyword)
  }

  goBack() {

  }
}

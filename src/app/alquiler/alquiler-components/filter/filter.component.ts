import { Component, OnInit } from '@angular/core';
import { Filter, filters } from './filter-data';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  filters:Filter[];

  constructor() {

    this.filters = filters;
  }

  ngOnInit(): void {
  }

}

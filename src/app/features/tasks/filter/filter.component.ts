import {Component} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {
  filterActive: boolean = true

  toggleCollapse(){
    this.filterActive = !this.filterActive
  }

}

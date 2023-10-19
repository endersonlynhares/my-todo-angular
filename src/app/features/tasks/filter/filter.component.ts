import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  lists!: AssignmentList[]

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.api.getAssignmentList().subscribe({
      next: (data) => {
        this.lists = data.items
      },
      error: err => console.log(err.message)
    })
  }

  filterActive: boolean = true

  toggleCollapse() {
    this.filterActive = !this.filterActive
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max) {
      console.log('teste...')
    }
  }

}

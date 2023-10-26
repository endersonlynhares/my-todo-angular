import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";
import {MatSelect} from "@angular/material/select";
import {Assignment} from "../../../domain-types/models/Assignment";
import {Observable} from "rxjs";
import {DataSharingService} from "../../../core/services/data-sharing.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit, AfterViewInit {
  defaultValueSelect!: string
  lists!: AssignmentList[]
  private page: number = 1
  private maxPage!: number
  filterActive: boolean = true

  constructor(
    private api: ApiService,
    private sharedApi: DataSharingService
  ) {
  }

  @ViewChild('selectLists') selectElem!: MatSelect

  ngAfterViewInit() {
    this.selectElem.openedChange.subscribe(() => {
      this.registerPanelScrollEvent()
    })

  }

  registerPanelScrollEvent() {
    if (this.selectElem && this.selectElem.panel && this.selectElem.panel.nativeElement) {
      const panel = this.selectElem.panel.nativeElement;
      panel.addEventListener('scroll', (event: any) => this.loadNextOnScroll(event));
    }
  }

  loadNextOnScroll(event: any) {
    if (this.hasScrolledToBottom(event.target)) {
      this.page += 1
      console.log('Scrolled to bottom');
      if (this.page <= this.maxPage) {
        this.api.getAssignmentList(10, this.page).subscribe({
          next: data => {
            this.lists = [...this.lists, ...data.items]
          }
        })
      }
    }
  }


  ngOnInit() {
    this.api.getAssignmentList().subscribe({
      next: (data) => {
        this.lists = data.items
        this.maxPage = data.pageCount
        this.defaultValueSelect = data.items[0].id
        this.api.getAssignments(this.defaultValueSelect).subscribe(data => {
          this.sharedApi.setTasks(data)
        })
      },
      error: err => console.log(err.message)
    })




  }

  selectList(e: string) {
    this.api.getAssignments(e).subscribe(data => {
      this.sharedApi.setTasks(data)
    })
  }

  loadData(pageSize: number, page: number) {
    this.api.getAssignmentList(pageSize, page).subscribe({
      next: (data) => {
        this.lists = data.items
        this.maxPage = data.pageCount
      }
    })
  }

  private hasScrolledToBottom(target: any): boolean {
    return (
      target.offsetHeight + target.scrollTop >= target.scrollHeight
    )
  }

  reset() {
    this.page = 1
    this.loadData(10, 1)
  }

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

import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {AssignmentList} from "../../../domain-types/models/AssigmentList";
import {MatSelect} from "@angular/material/select";
import {Assignment} from "../../../domain-types/models/Assignment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit, AfterViewInit {
  defaultValueSelect!: string
  lists!: AssignmentList[]
  tasks!: Observable<Assignment[]>
  private page: number = 1
  private maxPage!: number
  filterActive: boolean = false

  constructor(
    private api: ApiService
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
        console.log(this.defaultValueSelect)
        this.api.getAssignments(data.items[0].id).subscribe(data => console.log(data))
      },
      error: err => console.log(err.message)
    })

    this.tasks.subscribe(data => console.log(data))
  }

  selectList(e: string) {
    this.tasks = this.api.getAssignments(e)
    this.tasks.subscribe(data => console.log(data))
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

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {AssignmentList} from "../../domain-types/models/AssigmentList";
import {MatDialog} from "@angular/material/dialog";
import {CreateListDialogComponent} from "../../shared/dialogs/create-list-dialog/create-list-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass'],
})
export class ListsComponent implements OnInit, OnDestroy {
  lists!: AssignmentList[]
  displayedColumns: string[] = ['name', 'actions'];
  dataSource!: MatTableDataSource<any>
  private subscription!: Subscription

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private api: ApiService,
    private newListDialog: MatDialog,
  ) {

  }

  handlePageEvent(e: PageEvent) {
    this.api.getAssignmentList(e.pageSize, e.pageIndex+1).subscribe(data => {
      this.lists = data.items.map(item => {
        return ({
          'id': item.id,
          'name': item.name
        })
      })

      this.dataSource = new MatTableDataSource<AssignmentList>(this.lists);
      this.paginator.length = data.total;
      this.paginator.pageSize = data.perPage;
      this.paginator.pageIndex = data.page - 1;
      this.dataSource.paginator = this.paginator

    })
  }

  ngOnInit() {
    this.subscription = this.api.getAssignmentList().subscribe({
      next: data => {
        this.lists = data.items.map(item => {
          return ({
            'id': item.id,
            'name': item.name
          })
        })

        this.dataSource = new MatTableDataSource<AssignmentList>(this.lists);
        this.paginator.length = data.total;
        this.paginator.pageSize = data.perPage;
        this.paginator.pageIndex = data.page - 1;
        this.dataSource.paginator = this.paginator
      },
      error: err => console.log(err.message)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  editList(list: AssignmentList) {
    console.log(list)
  }

  deleteList(list: AssignmentList) {
    this.api.deleteAssignmentList(list.id)
  }

  onCallParent() {
    this.newListDialog.open(CreateListDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Create List'
      }
    })
  }

  protected readonly PageEvent = PageEvent;
}

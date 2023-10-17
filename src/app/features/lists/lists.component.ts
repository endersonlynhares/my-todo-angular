import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {AssignmentList, AssignmentListPaged} from '../../domain-types/models/AssigmentList';
import {MatDialog} from '@angular/material/dialog';
import {CreateListDialogComponent} from '../../shared/dialogs/create-list-dialog/create-list-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass'],
})
export class ListsComponent implements OnInit, OnDestroy {
  lists: AssignmentList[] = [];
  displayedColumns: string[] = ['name', 'actions'];
  dataSource: MatTableDataSource<AssignmentList> = new MatTableDataSource<AssignmentList>([]);
  private subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService, private newListDialog: MatDialog) {
  }

  configureDataSource(data: AssignmentListPaged) {
    this.dataSource.data = this.lists;
    this.paginator.length = data.total;
    this.paginator.pageSize = data.perPage;
    this.paginator.pageIndex = data.page - 1;
  }


  loadData(pageSize: number, pageIndex: number) {
    this.api.getAssignmentList(pageSize, pageIndex).subscribe({
      next: (data: AssignmentListPaged) => {
        this.lists = data.items.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        });

        this.configureDataSource(data);
      },
      error: (err) => console.log(err.message),
    });
  }


  handlePageEvent(e: PageEvent) {
    this.loadData(e.pageSize, e.pageIndex + 1);
  }

  ngOnInit() {
    this.loadData(10, 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editList(list: AssignmentList) {
    console.log(list);
  }

  deleteList(list: AssignmentList) {
    this.api.deleteAssignmentList(list.id).subscribe({
      next: data => {
        this.loadData(10, 1)
      }
    })
  }

  onCallParent() {
    let dialog = this.newListDialog.open(CreateListDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Create List',
      },
    });

    dialog.afterClosed().subscribe(data => {
      if (data.createdNewList) {
        this.loadData(10, 1)
      }
    })
  }
}

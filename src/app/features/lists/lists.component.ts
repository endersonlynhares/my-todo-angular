import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {AssignmentList, AssignmentListPaged} from '../../domain-types/models/AssigmentList';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateListDialogComponent} from '../../shared/dialogs/create-list-dialog/create-list-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {EditListDialogComponent} from "../../shared/dialogs/edit-list-dialog/edit-list-dialog.component";
import {ConfirmDialogComponent} from "../../shared/dialogs/confirm-dialog/confirm-dialog";
import Swal from "sweetalert2";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass'],
})
export class ListsComponent implements OnInit, OnDestroy {
  lists!: AssignmentList[];
  displayedColumns: string[] = ['name', 'actions'];
  dataSource: MatTableDataSource<AssignmentList> = new MatTableDataSource<AssignmentList>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private api: ApiService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
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
    this.loadData(10, 1)
    this.cdr.detectChanges()
  }

  ngOnDestroy() {
  }

  editList(list: AssignmentList) {
    let dialogEdit = this.dialog.open(EditListDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Edit List',
        list: list
      },
    })
    dialogEdit.afterClosed().subscribe(data => {
      if (data.updatedList) {
        this.loadData(10, 1)
      }
    })
  }

  deleteList(list: AssignmentList) {
    const onConfirm = (dialogRef: MatDialogRef<ConfirmDialogComponent> ) => {
      this.api.deleteAssignmentList(list.id).subscribe({
        next: data => {
          Swal.fire(
            'Lista deletada com sucessoo!',
            `A lista ${list.name} foi removida com sucesso`,
            'success'
          ).then()
          dialogRef.close({removedList: true})
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error['erros'],
          }).then()
          console.log(err)
        }
      })
    }

    let dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '750px',
      panelClass: 'dialog-colorful',
      data: {
        title: 'Remover Lista',
        onConfirm: onConfirm
      },
    })

    dialog.afterClosed().subscribe(data => {
      if (data?.removedList) {
        this.loadData(10, 1)
      }
    })
  }

  onCallParent() {
    let dialog = this.dialog.open(CreateListDialogComponent, {
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

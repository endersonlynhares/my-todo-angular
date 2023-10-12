import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.sass']
})
export class CommonDialogComponent {
  inputData!: any
  @Input() contentTemplate: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<CommonDialogComponent>,
  ) {
  }

  ngOnInit() {
    this.inputData = this.data
  }

  closePopup() {
    this.ref.close()
  }

}

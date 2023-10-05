import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.sass']
})
export class CommonHeaderComponent {
  @Input() title!: string
  @Output() callParent = new EventEmitter<any>()

  submit(): void {
    this.callParent.emit(null)
  }
}

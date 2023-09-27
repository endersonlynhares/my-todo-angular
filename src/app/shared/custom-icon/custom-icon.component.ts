import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.sass']
})
export class CustomIconComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string
  @HostBinding('style.width.px') @Input() width: number = 25;
  @Input()
  public set path(filePath: string) {
    this._path = `url('${filePath}')`
  }
}

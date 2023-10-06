// svg-icon.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-dots',
  template: `
    <svg viewBox="0 0 16 16" [attr.fill]="color" [attr.width]="width" [attr.height]="height">
      <path
        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    </svg>
  `,
})
export class SvgDotsComponent {
  @Input() width: string = '12.5';
  @Input() height: string = '12.5';
  @Input() color: string = '#333333'
}

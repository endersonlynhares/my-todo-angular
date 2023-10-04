// svg-icon.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-clock',
  template: `
    <svg viewBox="0 0 13 13" [attr.width]="width" [attr.height]="height">
      <path d="M6.5 0.25C3.0625 0.25 0.25 3.0625 0.25 6.5C0.25 9.9375 3.0625 12.75 6.5 12.75C9.9375 12.75 12.75 9.9375 12.75 6.5C12.75 3.0625 9.9375 0.25 6.5 0.25ZM6.5 11.5C3.74375 11.5 1.5 9.25625 1.5 6.5C1.5 3.74375 3.74375 1.5 6.5 1.5C9.25625 1.5 11.5 3.74375 11.5 6.5C11.5 9.25625 9.25625 11.5 6.5 11.5ZM6.8125 3.375H5.875V7.125L9.125 9.125L9.625 8.3125L6.8125 6.625V3.375Z" [attr.fill]="color" fill-opacity="0.3"/>
    </svg>
  `,
})
export class SvgClockComponent {
  @Input() width: string = '12.5';
  @Input() height: string = '12.5';
  @Input() color: string = '#333333'
}

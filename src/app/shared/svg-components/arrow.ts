// svg-icon.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-arrow',
  template: `
    <svg viewBox="0 0 19 11" [attr.width]="width" [attr.height]="height">
      <path d="M3.25 0.409119L9.5 6.65912L15.75 0.409119L18.25 1.65912L9.5 10.4091L0.75 1.65912L3.25 0.409119Z"
            fill="#202342"/>
    </svg>
  `,
})
export class SvgArrowComponent {
  @Input() width: string = '19';
  @Input() height: string = '11';
  @Input() color: string = '#E9ECEF'
}

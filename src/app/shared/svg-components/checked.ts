// svg-icon.component.ts
import {Component, Input} from '@angular/core';


@Component({
  selector: 'svg-checked',
  template: `
    <svg viewBox="0 0 12 12"  [attr.width]="width" fill="none" [attr.height]="height">
      <g clip-path="url(#clip0_54_1686)">
        <path d="M4 6.25L5.5 7.75L8 4.75" stroke="#25294C" stroke-width="2.58333" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke="#25294C" stroke-width="2.58333"/>
      </g>
      <defs>
        <clipPath id="clip0_54_1686">
          <rect width="12" height="12" fill="white"/>
        </clipPath>
      </defs>

    </svg>
  `,
})
export class SvgCheckedComponent {
  @Input() width: string = '12.5';
  @Input() height: string = '12.5';
  @Input() color: string = '#333333'
}

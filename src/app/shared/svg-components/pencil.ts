// svg-icon.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-pencil',
  template: `
    <svg viewBox="0 0 17 17" [attr.width]="width" [attr.height]="height">
      <g clip-path="url(#clip0_54_5109)">
        <path
          d="M9.419 3.39935L13.4196 7.39997L4.73244 16.0872L1.16557 16.4809C0.688065 16.5337 0.284628 16.13 0.337753 15.6525L0.734628 12.0831L9.419 3.39935ZM15.894 2.80372L14.0156 0.925285C13.4296 0.339348 12.4793 0.339348 11.8934 0.925285L10.1262 2.69247L14.1268 6.6931L15.894 4.92591C16.4799 4.33966 16.4799 3.38966 15.894 2.80372Z"
          [attr.fill]="color"/>
      </g>
      <defs>
        <clipPath id="clip0_54_5109">
          <rect width="16" height="16" fill="white" transform="translate(0.333374 0.485596)"/>
        </clipPath>
      </defs>
    </svg>
  `,
})
export class SvgPencilComponent {
  @Input() width: string = '17';
  @Input() height: string = '17';
  @Input() color: string = '#E9ECEF'
}

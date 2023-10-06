// svg-icon.component.ts
import {Component, Input} from '@angular/core';


@Component({
  selector: 'svg-trash',
  template: `
    <svg viewBox="0 0 17 17" [attr.width]="width" [attr.height]="height">
      <g clip-path="url(#clip0_54_5114)">
        <path
          d="M3.33337 16.4856H13.3334L14.3334 5.4856H2.33337L3.33337 16.4856ZM10.3334 2.4856V0.485596H6.33337V2.4856H1.33337V5.4856L2.33337 4.4856H14.3334L15.3334 5.4856V2.4856H10.3334ZM9.33337 2.4856H7.33337V1.4856H9.33337V2.4856Z"
          [attr.fill]="color"/>
      </g>
      <defs>
        <clipPath id="clip0_54_5114">
          <rect width="16" height="16" fill="white" transform="translate(0.333374 0.485596)"/>
        </clipPath>
      </defs>
    </svg>
  `,
})
export class SvgTrashComponent {
  @Input() width: string = '19';
  @Input() height: string = '11';
  @Input() color: string = '#E9ECEF'
}

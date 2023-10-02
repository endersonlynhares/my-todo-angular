// svg-icon.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'svg-round',
  template: `
    <svg viewBox="0 0 19 19" [attr.width]="width" [attr.height]="height">
      <path
        d="M16.7917 0.125H2.20833C1.0625 0.125 0.125 1.0625 0.125 2.20833V16.7917C0.125 17.9375 1.0625 18.875 2.20833 18.875H16.7917C17.9375 18.875 18.875 17.9375 18.875 16.7917V2.20833C18.875 1.0625 17.9375 0.125 16.7917 0.125ZM16.7917 2.20833V11.5833H13.0833C12.7083 11.5833 12.375 11.7812 12.1875 12.1042C11.6458 13.0417 10.6562 13.6667 9.5 13.6667C8.34375 13.6667 7.35417 13.0417 6.8125 12.1042C6.72161 11.9467 6.5911 11.8158 6.43394 11.7245C6.27678 11.6331 6.09845 11.5844 5.91667 11.5833H2.20833V2.20833H16.7917Z"
        [attr.fill]="color"/>
    </svg>
  `,
})
export class SvgRoundInboxComponent {
  @Input() width: string = '100';
  @Input() height: string = '100';
  @Input() color: string = '#E9ECEF'
}

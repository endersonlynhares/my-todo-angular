import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-auth',
  templateUrl: './button-auth.component.html',
  styleUrls: ['./button-auth.component.sass']
})
export class ButtonAuthComponent {
  @Input() text!: string
}

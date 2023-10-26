import {Component, Input} from '@angular/core';
import {Assignment} from "../../../domain-types/models/Assignment";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  showActions: boolean = false
  @Input() task!: Assignment
  onShowActions() {
    this.showActions = !this.showActions
  }

}

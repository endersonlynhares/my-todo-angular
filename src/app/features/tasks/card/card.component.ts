import {Component, Input} from '@angular/core';
import {Assignment} from "../../../domain-types/models/Assignment";
import {DatePipe} from "@angular/common";
import {getSituation, SituationColor} from "../../../utils/situation-card";

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

  formatDate(dateString: string){
    const date = new Date(dateString)
    return new DatePipe('pt-BR').transform(date, 'dd MMMM, HH:mm')
  }

  protected readonly getSituation = getSituation;
  protected readonly SituationColor = SituationColor;
}

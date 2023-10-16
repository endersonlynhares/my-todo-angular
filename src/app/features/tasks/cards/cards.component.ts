import {Component} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {Assignment} from "../../../domain-types/models/Assignment";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
  tasks!: Assignment[]

  constructor(
    private api: ApiService
  ) {
    this.api.getAllAssignments()
  }
}

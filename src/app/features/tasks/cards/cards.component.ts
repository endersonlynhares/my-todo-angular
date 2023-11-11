import {Component, OnInit} from '@angular/core';

import {Assignment} from "../../../domain-types/models/Assignment";
import {Observable} from "rxjs";
import {DataSharingService} from "../../../core/services/data-sharing.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  tasks!: Observable<Assignment[]>

  constructor(
    private sharedApi: DataSharingService,
  ) {

  }


  ngOnInit() {
    this.tasks = this.sharedApi.tasks
  }



}

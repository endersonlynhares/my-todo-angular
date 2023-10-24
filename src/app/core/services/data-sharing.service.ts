import {Injectable} from '@angular/core';
import {Assignment, AssignmentsPaged} from "../../domain-types/models/Assignment";
import {BehaviorSubject} from "rxjs";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private tasksSubject = new BehaviorSubject<Assignment[]>([]);
  tasks = this.tasksSubject.asObservable();

  constructor() {
  }

  setTasks(data: AssignmentsPaged) {
    this.tasksSubject.next(data.items)
  }

}

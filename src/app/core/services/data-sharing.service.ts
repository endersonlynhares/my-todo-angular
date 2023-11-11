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
  private idListSubject = new BehaviorSubject<string>('')
  currentId = this.idListSubject.asObservable()
  constructor(
    private api: ApiService
  ) {
  }

  setTasks(data: AssignmentsPaged) {
    this.tasksSubject.next(data.items)
  }

  setCurrentList(currentListID: string){
    this.idListSubject.next(currentListID)
  }

  loadTasks(currentListId: string){
    this.api.getAssignments(currentListId).subscribe(data => {
      this.setTasks(data)
    })
  }

}

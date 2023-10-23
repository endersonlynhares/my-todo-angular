import { Pipe, PipeTransform } from '@angular/core';
import {AssignmentList} from "../../domain-types/models/AssigmentList";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lists: AssignmentList[], filter: unknown[]): unknown {
    return null;
  }

}

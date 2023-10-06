import {Assignment} from "./Assignment";

export interface AddAssignmentList {
  name: string
}

export interface AssignmentList {
  id: string,
  name: string,
  assignments: Assignment[]
}

export interface AssignmentListPaged {
  items: AssignmentList[],
  page: number,
  total: number,
  perPage: number,
  pageCount: number
}

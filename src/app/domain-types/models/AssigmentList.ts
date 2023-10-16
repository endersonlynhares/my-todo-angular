export interface AddAssignmentList {
  name: string
}

export interface AssignmentList {
  id: string,
  name: string,
}

export interface AssignmentListPaged {
  items: AssignmentList[],
  page: number,
  total: number,
  perPage: number,
  pageCount: number
}

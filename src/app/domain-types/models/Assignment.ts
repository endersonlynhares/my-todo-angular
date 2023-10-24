export interface AddAssignment {
  assignmentListId: string
  deadline: string,
  description: string,
}

export type Assignment = {
  id: string,
  description: string,
  assignmentListId: string,
  deadline: string,
  concluded: boolean,
  concludedAt: null | string,
  userId: string,
  createdAt: string,
  updatedAt: string,
  assignmentList: null
}

export type AssignmentsPaged = {
  items: Assignment[],
  page: number,
  total: number,
  perPage: number,
  pageCount: number
}

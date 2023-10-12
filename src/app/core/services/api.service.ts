import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TokenResponse} from "../../domain-types/models/TokenResponse";
import {User} from "../../domain-types/models/User";
import {AssignmentList, AssignmentListPaged} from "../../domain-types/models/AssigmentList";
import {Assignment} from "../../domain-types/models/Assignment";

interface UserLogin {
  name: string,
  password: string
}

interface registerUserData {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

const apiURL: string = 'https://api.todo.maracanau.ifce.edu.br'

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient, private router: Router) {
  }

  loginUser(user: UserLogin) {
    this.http.post<TokenResponse>(`${apiURL}/Auth/login`, user).subscribe({
      next: (data: TokenResponse) => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('expiresIn', data.expiresIn);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['']).then()
      },
      error: (err: any) => {
        alert(err.error['erros'][0])
      }
    })
  }

  getAssignmentList() {
    this.http.get<AssignmentListPaged>(`${apiURL}/AssignmentList`).subscribe(data => console.log(data))
  }

  addAssignmentList(data: AssignmentList) {
    this.http.post<AssignmentList>(`${apiURL}/AssignmentList`, data).subscribe({
      next: (data) => {
        console.log('Lista criada com sucesso!')
      },
      error: err => {
        console.log(err.message)
      }
    })
  }

  addAssignment(data: Assignment) {
    this.http.post<Assignment>(`${apiURL}/Assignments`, {
      description: data.description,
      deadline: data.deadline,
      assignmentListId: data.assignmentListId
    }).subscribe({
      next: (response) => {
        console.log('Task criada com sucesso.')
        console.log(response)
      },
      error: err => console.log(err.message)
    })
  }

  registerUser(newUser: registerUserData) {
    this.http.post(`${apiURL}/Auth/register`, newUser).subscribe({
      next: () => {
        this.router.navigate(['/signin']).then()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

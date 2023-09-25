import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  name: string,
  password: string
}

interface DataResponse {
  accessToken: string,
  expiresIn: number,
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  loginUser(user: User) {
    this.http.post('https://api.todo.maracanau.ifce.edu.br/Auth/login', user).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('name', data.user.name);
        console.log(data)
      },
      error: (err) => {
        alert(err.error['erros'][0])
      }
    })
  }

  logoutUser() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("name");
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

}

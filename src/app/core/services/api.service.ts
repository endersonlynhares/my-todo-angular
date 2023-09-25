import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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

  constructor(private http: HttpClient, private router: Router) {
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  loginUser(user: User) {
    this.http.post('https://api.todo.maracanau.ifce.edu.br/Auth/login', user).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('name', data.user.name);
        this.router.navigate(['']).then()
      },
      error: (err) => {
        alert(err.error['erros'][0])
      }
    })
  }

  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.router.navigate(['/signin']).then()
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

}

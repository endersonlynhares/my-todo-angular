import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface User {
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

  loginUser(user: User) {
    this.http.post(`${apiURL}/Auth/login`, user).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('name', data.user.name);
        this.router.navigate(['']).then()
      },
      error: (err: any) => {
        alert(err.error['erros'][0])
      }
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

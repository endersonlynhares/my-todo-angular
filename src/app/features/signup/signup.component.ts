import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(
    private formBuild: FormBuilder
  ) {
  }

  onSubmit() {

  }

  ngOnInit() {
    this.signUpForm = this.formBuild.group({
      nome: [null],
      email: [null, Validators.email],
      senha: [null],
      confirmacaoSenha: [null],
    })
  }

}

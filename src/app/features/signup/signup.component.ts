import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidations} from "../../shared/form-validations";
import {BaseFormComponent} from "../../shared/form-base/form-base";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent extends BaseFormComponent implements OnInit {

  constructor(
    private formBuild: FormBuilder
  ) {
    super()
  }

  override submit() {
    console.log(this.formulario)
  }

  override ngOnInit() {
    this.formulario = this.formBuild.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmacaoSenha: [null, [Validators.required, FormValidations.equalsTo('senha')]],
    })
  }

}

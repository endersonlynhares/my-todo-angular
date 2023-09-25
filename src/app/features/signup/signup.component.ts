import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormValidations} from "../../shared/form-validations";
import {BaseFormComponent} from "../../shared/form-base/form-base";
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent extends BaseFormComponent implements OnInit {

  constructor(
    private formBuild: FormBuilder,
    private apiService: ApiService
  ) {
    super()
  }

  override submit() {
    this.apiService.registerUser(this.formulario.value)
  }

  override ngOnInit() {
    this.formulario = this.formBuild.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirm: [null, [Validators.required, FormValidations.equalsTo('password')]],
    })
  }

}

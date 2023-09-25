import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseFormComponent} from "../../shared/form-base/form-base";
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    super()
  }

  override ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  submit() {
    this.apiService.loginUser(this.formulario.value)
  }

  verifyValidTouched(field: string): boolean {
    return <boolean>(
      !this.formulario.get(field)?.valid && (this.formulario.get(field)?.touched || this.formulario.get(field)?.dirty)
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BaseFormComponent} from "../../shared/form-base/form-base";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.formulario)
  }

  verifyValidTouched(field: string): boolean {
    return <boolean>(
      !this.formulario.get(field)?.valid && (this.formulario.get(field)?.touched || this.formulario.get(field)?.dirty)
    )
  }

}

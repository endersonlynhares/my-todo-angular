import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent {
  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      email: [null, Validators.email],
      password: [null]
    })
  }

  onSubmit(){
    console.log(this.formulario.value)
  }

}

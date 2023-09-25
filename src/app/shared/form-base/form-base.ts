import {Component, OnInit, Directive} from '@angular/core';
import {FormGroup, FormArray} from '@angular/forms';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  abstract submit(): void;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const control = formGroup.get(campo);
      control?.markAsDirty();
      control?.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.verificaValidacoesForm(control);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      this.formulario.get(campo)?.invalid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
}

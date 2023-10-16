import {AbstractControl, FormControl, FormGroup, ValidatorFn} from "@angular/forms";

export class FormValidations {

  static equalsTo(fieldToCompare: string) {
    return (formControl: FormControl) => {
      if (fieldToCompare == null) {
        throw new Error('É necessário informar o campo!')
      }
      if (!formControl || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(fieldToCompare)

      if (!field) {
        throw new Error('É necessário informar um campo válido!')
      }
      if (field.value !== formControl.value) {
        return {equalsTo: fieldToCompare}
      }

      return null
    }
  }

  static dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const date = new Date(control.value);
        if (isNaN(date.getTime())) {
          return {'invalidDate': true};
        }
      }

      return null;
    };
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: any = {
      'required': `O campo é obrigatório, por favor digite-o.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'email': 'email inválido',
      'equalsTo': 'os campos não são iguais',
      'pattern': 'campo inválido',
      'invalidDate': 'Digite uma data válida.'
    };

    return config[validatorName];
  }
}

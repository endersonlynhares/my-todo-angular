import {FormControl, FormGroup} from "@angular/forms";

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

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: any = {
      'required': `O campo é obrigatório, por favor digite.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'email': 'email inválido',
      'equalsTo': 'os campos não são iguais',
      'pattern': 'campo inválido'
    };

    return config[validatorName];
  }
}

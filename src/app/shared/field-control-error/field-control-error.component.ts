import {Component, Input} from '@angular/core';
import {FormValidations} from "../form-validations";

@Component({
  selector: 'app-field-control-error',
  templateUrl: './field-control-error.component.html',
  styleUrls: ['./field-control-error.component.sass']
})
export class FieldControlErrorComponent {
  @Input() field!: string
  @Input() control!: any

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)) {
        return FormValidations.getErrorMsg(this.field, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}

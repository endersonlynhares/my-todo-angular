import {Component, forwardRef, Input} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputAuthComponent),
  multi: true
};

@Component({
  selector: 'app-input-auth',
  templateUrl: './input-auth.component.html',
  styleUrls: ['./input-auth.component.sass'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputAuthComponent implements ControlValueAccessor {
  @Input() type: string = 'text'
  @Input() field!: string;
  @Input() label!: string;
  @Input() control!: any

  private innerValue: any;

  verifyValidTouched() {
    return <boolean>(
      this.control !== undefined && this.control?.invalid && (this.control?.touched || this.control?.dirty)
    )
  }

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {
  };
  onTouchedCb: (_?: any) => void = () => {
  };

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

}

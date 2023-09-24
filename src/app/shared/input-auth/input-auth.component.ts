import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
  @Input() name!: string
  @Input() type: string = 'text'
  @Input() id!: string;
  @Input() label!: string;

  private innerValue: undefined

  get value() {
    return this.innerValue
  }

  set value(newValue: undefined) {
    if (this.innerValue != newValue) {
      this.innerValue = newValue;
      this.onChangeCb(newValue);
    }
  }

  onChangeCb: (_: any) => void = () => {
  };
  onTouchedCb: (_: any) => void = () => {
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

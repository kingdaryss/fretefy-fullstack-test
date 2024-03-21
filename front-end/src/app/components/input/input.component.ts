import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = "";
  @Input() width: number;
  value: string = "";
  isFocused: boolean = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  updateValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}

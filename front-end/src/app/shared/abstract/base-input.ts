import {  Injectable } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";

let globalUniqueIdCounter = 0;

@Injectable({ providedIn: 'root' })
export abstract class BaseInputComponent implements ControlValueAccessor {
  private _isFocused: boolean = false;
  public id: number;
  protected disabled = false;
  protected abstractControl!: FormControl;
  constructor(public ngControl: NgControl) {
    this.id = globalUniqueIdCounter++
    this.ngControl.valueAccessor = this;
    this.abstractControl = new FormControl(null);
    this.abstractControl.valueChanges.subscribe(value => { this.updateValue(value); });
  }
  public get isFocused(): boolean { return this._isFocused; }
  public set isFocused(value: boolean) { this._isFocused = value; this.onTouched(); }
  protected onChange: any = () => {};
  protected onTouched: any = () => {};
  protected updateValue(value: string) { if (!this.disabled) { this.onChange(value); } }
  public get invalid(): boolean { return this.ngControl?.invalid || false; }
  public get touched(): boolean { return this.ngControl?.touched || false; }
  public get dirty(): boolean { return this.ngControl?.dirty || false; }
  public get showError(): boolean { return !this.ngControl ? false : this.invalid ? (this.dirty || this.touched) || false : false; }
  public writeValue(value: string): void { if (value){ this.abstractControl.patchValue(value); } }
  public registerOnChange(fn: any): void { this.onChange = fn; }
  public registerOnTouched(fn: any): void { this.onTouched = fn; }
  public setDisabledState(disabled: boolean) { this.disabled = disabled; }
}

import { Component, Input,  Optional, Self,  } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseInputComponent } from 'src/app/shared/abstract/base-input';

@Component({ selector: 'app-input', templateUrl: './input.component.html', styleUrls: ['./input.component.scss'] })
export class InputComponent extends BaseInputComponent {
  @Input() label: string = "";
  @Input() width: number;

  get widthStyle() { return this.width ? this.width + 'px' : 'calc(100% - 16px)'; }
  constructor(@Self() @Optional() public ngControl: NgControl) { super(ngControl) }
}

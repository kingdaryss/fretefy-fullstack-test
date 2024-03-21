import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({ selector: 'app-error', templateUrl: './error.component.html', styleUrls: ['./error.component.scss'] })
export class ErrorComponent {
  @Input() showError: boolean;
  @Input() ngControl: NgControl;
  get() { return this.errors[Object.keys(this.ngControl.errors)[0]]; }
  errors = {
    required: "* Este campo é obrigatório.",
    duplicateValue: "* Este campo esta duplicado."
  }
}

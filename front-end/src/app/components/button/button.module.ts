import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconDirective } from './icon.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	ButtonComponent, IconDirective],
  exports: [ButtonComponent, IconDirective]
})
export class ButtonModule { }

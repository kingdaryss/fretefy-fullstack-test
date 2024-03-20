import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconDirective } from './icon.directive';
import { SmallButtonDirective } from './small-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, SmallButtonDirective, IconDirective],
  exports: [ButtonComponent, SmallButtonDirective, IconDirective]
})
export class ButtonModule { }

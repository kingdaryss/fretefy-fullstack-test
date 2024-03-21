import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconButtonDirective } from './icon.directive';
import { SmallButtonDirective } from './small-button.directive';
import { ButtonDirective } from './button.directive';
@NgModule({
  imports: [ CommonModule ],
  declarations: [ButtonComponent, SmallButtonDirective, IconButtonDirective, ButtonDirective],
  exports: [ButtonComponent, SmallButtonDirective, IconButtonDirective]
})
export class ButtonModule { }

import { IconDirective, IconFillDirective } from './icon.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ CommonModule ],
  declarations: [IconDirective, IconFillDirective],
  exports: [IconDirective, IconFillDirective]
})
export class IconModule { }

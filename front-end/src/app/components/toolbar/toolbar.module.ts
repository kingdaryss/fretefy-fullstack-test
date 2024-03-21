import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    IconModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule { }

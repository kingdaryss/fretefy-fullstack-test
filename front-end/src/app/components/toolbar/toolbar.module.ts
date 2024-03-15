import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ToolbarComponent, LoadingComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule { }

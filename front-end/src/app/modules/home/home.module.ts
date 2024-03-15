import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';

import { DxTreeListModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,

    MatCommonModule,
    MatCardModule,
    DxTreeListModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }

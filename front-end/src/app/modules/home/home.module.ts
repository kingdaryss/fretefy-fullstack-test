import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';

import { DxTreeListModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DxTreeListModule,
    MatTooltipModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumnComponent, TableComponent, TableToolbarComponent } from './table.component';
@NgModule({
  declarations: [
    TableComponent,
    TableColumnComponent,
    TableToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableColumnComponent,
    TableToolbarComponent
  ]
})
export class TableModule { }

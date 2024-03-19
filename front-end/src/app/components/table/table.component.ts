import { Component, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input, ContentChild } from '@angular/core';
import { Observable } from 'rxjs';

export interface ColumnDataTable {
  caption: string;
  template: TemplateRef<any>;
  styles: any;
}

@Component({ selector: 'app-toolbar', template: `<ng-content></ng-content>` })
export class TableToolbarComponent {
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  constructor () { }
}
@Component({ selector: 'app-column', template: `<ng-content></ng-content>` })
export class TableColumnComponent {
  @Input() caption: string;
  @Input() width: number;
  @Input() textAlign: string;
  @ContentChild(TemplateRef) template: TemplateRef<any>;
  style() {
    return {
      'width':  this.width ? this.width + 'px' : '100%',
      'min-width': this.width ? this.width + 'px' : 'unset',
      'text-wrap': 'nowrap',
      'text-align': this.textAlign
    }
  }
}

@Component({ selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.scss'] })
export class TableComponent implements AfterContentInit {
  @ContentChildren(TableColumnComponent) columnComponent: QueryList<TableColumnComponent>;
  @ContentChildren(TableToolbarComponent) toolbarComponent: QueryList<TableToolbarComponent>;
  columns: ColumnDataTable[] = [];
  toolbar: TemplateRef<any>;
  @Input() data: any[] | Observable<any[]> = [];
  ngAfterContentInit() {
    this.columns = this.columnComponent.toArray().map(column => ({ caption: column.caption, template: column.template, styles: column.style() }));
    console.log(this.toolbarComponent)
    this.toolbar = this.toolbarComponent.first.template;
  }
}


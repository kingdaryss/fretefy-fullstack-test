import { Component, Input, OnDestroy, OnInit, EventEmitter, Output, Self, Optional, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSearchComponent),
      multi: true
    },
  ]
})
export class SelectSearchComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() data$: Observable<{id: number; name: string;}[]>;
  @Input() name: string;
  @Input() showRemoveButton: boolean;
  @Input() formControl: FormControl = new FormControl();
  @Input() index: number;
  @Output() removeHandler: EventEmitter<number> = new EventEmitter<number>();
  dataFiltered$: Observable<{id: number; name: string;}[]>;
  subscription: Subscription;
  searchCtrl = new FormControl();

  private onChange: (value: any) => void;
  private onTouch: () => void;

  constructor() {}

  writeValue(value: number | string): void {
    this.searchCtrl.setValue(value.toString().substring(0, 3));
    if (this.onChange) {
      this.onChange(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  searchCtrlSubscription(): Subscription {
    return this.searchCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      filter(searchTerm => searchTerm.length >= 2)
    ).subscribe(searchTerm => {
      this.dataFiltered$ = this.data$.pipe(
        map(item => item.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    });
  }

  ngOnInit(): void {
    this.subscription = this.searchCtrlSubscription();
  }

  ngOnDestroy(): void { this.subscription?.unsubscribe(); }

  optionSelected(event: MatSelectChange) {
    this.formControl.setValue(event.value);
    this.onChange(event.value);
    this.onTouch();
  }

  removeItem(): void {
    this.removeHandler.emit(this.index);
  }

}

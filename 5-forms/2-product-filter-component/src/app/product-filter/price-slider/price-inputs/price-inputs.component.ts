import { Options } from 'ng5-slider';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shop-price-inputs',
  templateUrl: './price-inputs.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PriceInputsComponent,
      multi: true
    }
  ]
})
export class PriceInputsComponent implements ControlValueAccessor, OnInit {
  @Input() options: Options;
  @Output() changePrice: EventEmitter<any> = new EventEmitter();
  pricesGroup: FormGroup = this.fb.group({
    low: [0],
    high: [2000],
  });

  onChange = (v) => {};
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.pricesGroup.setValue({
    //   low: this.options?.floor,
    //   high: this.options?.ceil
    // });
    this.pricesGroup.valueChanges.subscribe((value) => {
      this.onChange([value.low, value.high]);
    });
  }

  writeValue(value: number[]): void {
    this.pricesGroup.setValue({
      low: value[0] ?? this.options?.floor,
      high: value[1] ?? this.options?.ceil
    },
    { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {}
}

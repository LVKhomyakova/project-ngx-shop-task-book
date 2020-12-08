import { Options } from 'ng5-slider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shop-price-slider',
  templateUrl: './price-slider.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PriceSliderComponent,
      multi: true,
    },
  ],
})
export class PriceSliderComponent  implements ControlValueAccessor, OnInit{
  pricesControl =  this.fb.control([20, 80]);
  options: Options = {
    animate: false,
    hideLimitLabels: true,
    hidePointerLabels: true,
    floor: 0,
    ceil: 2000,
  };

  onChange = (v) => {};
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pricesControl.valueChanges.subscribe((value) => {
      this.pricesControl.setValue(
        [value[0] ?? this.options.floor, value[1] ?? this.options.ceil],
        { emitEvent: false });
    });
  }

  writeValue(price: number[]): void {
    this.pricesControl.setValue(
      [price[0] ?? this.options.floor, price[1] ?? this.options.ceil],
      { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {}

  applyFilter(): void{
    this.onChange(this.pricesControl.value);
  }

}

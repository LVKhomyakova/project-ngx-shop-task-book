import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BrandsComponent,
      multi: true
    }
  ],
})
export class BrandsComponent  implements ControlValueAccessor{
  @Input() public brands: string[] = [];
  public selectedBrands: string[] = [];
  public showAmount = 6;
  public onChange = (v) => {};

  isChecked(brand: string): boolean {
    return this.selectedBrands.includes(brand);
  }
  check(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index < 0) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
    this.onChange(this.selectedBrands);
  }
  showBrand(value: number): void {
    this.showAmount = value;
  }
  // ---------------------------
  writeValue(brands: string[]): void {
    this.selectedBrands = brands;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {}
}

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shop-product-filter',
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent implements OnInit {
  @Input() brands: string[] = [];
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      searchByName: [''],
      brands: [[]],
      prices: [[0, 2000]]
    });
  }
  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.confirm.emit(this.form.value);
      } else {
        this.form.setErrors({
          value: this.form.get('value')?.errors
        });
      }
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.confirm.emit(this.form.value);
    } else {
      this.form.setErrors({
        value: this.form.get('value')?.errors
      });
    }
  }
}

import { FormGroup, FormBuilder, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
})
export class OrderFormComponent implements OnInit {
  @Output() confirm: EventEmitter<FormData> = new EventEmitter<FormData>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['Balu', [Validators.required]],
      telephone: ['+375 44 1234567', [Validators.required, this.phoneValidator]],
      email: ['q@w.e', [Validators.email, Validators.required]],
      address: ['vklfvjkv', [Validators.required]],
      });
  }

  submit(): void {
    if (this.form.valid) {
      this.confirm.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        email: this.form.get('email')?.errors,
        telephone: this.form.get('telephone')?.errors,
        name: this.form.get('name')?.errors,
      });
    }
  }

  phoneValidator(phoneControl: FormControl): ValidationErrors | null {
    const phone = phoneControl.value;
    return phone && phone.substring(0, 1) === '+' && phone.length >= 13
    ? null
    : {
        isNotMatch: true,
        error: 'Телефон должен быть в формате +44 7911 123456',
      };



  }
}

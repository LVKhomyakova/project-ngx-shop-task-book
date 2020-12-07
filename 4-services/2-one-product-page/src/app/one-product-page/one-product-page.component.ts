import { IProduct } from './../../../../../shared/mocks/4-services/product-information';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
})
export class ProductComponent implements OnInit {
  @Input()
  public product: IProduct = null;

  constructor() {}

  ngOnInit(): void {
  }


  goToBasket() {}
  addToCart() {}
  addFeedbackEvent() {}
}

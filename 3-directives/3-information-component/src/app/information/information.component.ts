import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input() product?: IProduct = null;
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();
  isShow = false;

  addToBasket(productName: string) {
    this.addToCart.emit(`${productName} - добавлен в корзину`);
  }

  show(): void {
    this.isShow = !this.isShow;
  }

}

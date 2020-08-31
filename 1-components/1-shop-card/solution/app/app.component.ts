import { Component } from '@angular/core';
import { cartProduct, ICartProduct } from '../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public terminalMessage: string;
  public product: ICartProduct = cartProduct;

  public increment() {
    this.terminalMessage = 'Увеличение количества товара';
    this.product.count++;
  }

  public remove() {
    this.terminalMessage = 'Убрать товара из корзины';
  }

  public decrement() {
    this.terminalMessage = 'Уменьшение количества товара';
    if (this.product.count === 1) {
      return;
    }
    this.product.count--;
  }
}

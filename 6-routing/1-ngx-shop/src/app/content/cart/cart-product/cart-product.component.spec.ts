import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { CartProductComponent } from './cart-product.component';
import { SharedModule } from '../../../shared/shared.module';
import { oneProduct } from '../../../../../../../shared/mocks/6-routing/product-information';

describe('[Moдуль 6 -  Компонент товара в корзинe]', () => {
  let fixture: ComponentFixture<CartProductComponent>;
  let component: CartProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод decrementProductInCart ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь свойство product c значением null', () => {
    expect((component as any).product).toBeDefined(null);
  });

  it('компонент должен иметь cобственное событие increment ', () => {
    expect((component as any).increment).toBeTruthy();
    expect((component as any).increment).toBeInstanceOf(EventEmitter);
  });
  it('компонент должен иметь cобственное событие decrement ', () => {
    expect((component as any).decrement).toBeTruthy();
    expect((component as any).decrement).toBeInstanceOf(EventEmitter);
  });

  it('компонент должен иметь cобственное событие increment ', () => {
    expect((component as any).increment).toBeTruthy();
    expect((component as any).increment).toBeInstanceOf(EventEmitter);
  });

  it('при нажатии на кнопку с селектором .increment должен вызываться метод  incrementProductInCart и срабатывать собстевнное событие increment', () => {
    spyOn(component as any, 'incrementProductInCart').and.callThrough();
    spyOn((component as any)?.increment, 'emit').and.callThrough();
    const incrementButton = fixture.debugElement.query(
      By.css('button.increment')
    );
    incrementButton.triggerEventHandler('click', null);
    expect((component as any)?.incrementProductInCart).toHaveBeenCalledTimes(1);
    expect((component as any)?.increment.emit).toHaveBeenCalledTimes(1);
  });

  it('при нажатии на кнопку с селектором .decrement должен вызываться метод  decrementProductInCart и срабатывать собстевнное событие decrement', () => {
    spyOn(component as any, 'decrementProductInCart').and.callThrough();
    spyOn((component as any)?.decrement, 'emit').and.callThrough();
    const incrementButton = fixture.debugElement.query(
      By.css('button.decrement')
    );
    incrementButton.triggerEventHandler('click', null);
    expect((component as any)?.decrementProductInCart).toHaveBeenCalledTimes(1);
    expect((component as any)?.decrement.emit).toHaveBeenCalledTimes(1);
  });

  it('тег c селекторор [.product-img img] должен иметь правильное связывание свойств src и alt', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.css('.product-img img'));
    expect(imgEl).toBeTruthy();
    const { images, name } = (component as any)?.product;
    expect(imgEl.attributes.src).toEqual(images[0].url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .product-desc h4.col-title должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc h4.col-title')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  it('тег с селектором .product-desc p.rate-amount  должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc p.rate-amount')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.feedbacksCount} отзыва`
    );
  });

  it('тег с селектором .product-desc span.rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc span.rate-amount')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.feedbacksCount} отзыва`
    );
  });

  it('тег с селектором .product-desc .price-text strong должен правильно интерполировать  свойство price продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(
      By.css('.product-desc .price-text strong')
    );
    expect(price).toBeTruthy();
    const priceValue = priceEl.nativeElement.textContent.trim();
    expect(priceValue).toEqual(`€${price.toString()}.00`);
  });
  it('тег с селектором .counter-value должен правильно интерполировать свойство count продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const { count } = (component as any)?.product;
    const counterEl = fixture.debugElement.query(By.css('.counter-value'));
    expect(count).toBeTruthy();
    const countValue = counterEl.nativeElement.textContent.trim();
    expect(countValue.toString()).toEqual(count.toString());
  });

  it('тег с селектором .price должен правильно интерполировать результат перемножения cвойств price и count products', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const { price, count } = (component as any)?.product;
    const totalEl = fixture.debugElement.query(By.css('.price'));
    expect(price).toBeTruthy();
    expect(count).toBeTruthy();
    const totalValue = totalEl.nativeElement.textContent.trim();
    expect(totalValue.toString()).toEqual(`€${price * count}.00`);
  });
});

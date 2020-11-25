import { CartProductComponent } from './cart-product/cart-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderFormComponent } from './order-form/order-form.component';

describe('[Moдуль 6 - Компонент страницы корзины]', () => {
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFormComponent, CartProductComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
    }),
      (fixture = TestBed.createComponent(CartComponent));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод confirm ', () => {
    expect((component as any).confirm).toBeTruthy();
  });
  it('компонент должен иметь метод decrementProductInCart ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart ', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод trackById ', () => {
    expect((component as any).trackById).toBeTruthy();
  });
  it('компонент должен иметь метод comeBack ', () => {
    expect((component as any).comeBack).toBeTruthy();
  });
});

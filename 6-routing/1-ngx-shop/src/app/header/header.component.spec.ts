import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header/header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

describe('[Moдуль 6 - Header компонент]', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод redirectTo', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('при нажатии на кнопку с селектором .basket.basket_not-empty должен вызываться метод  redirectTo ', () => {
    spyOn(component as any, 'redirectTo').and.callThrough();
    const incrementButton = fixture.debugElement.query(
      By.css('.basket.basket_not-empty')
    );
    incrementButton.triggerEventHandler('click', null);
    expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
  });
});

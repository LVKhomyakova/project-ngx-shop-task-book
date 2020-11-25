import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';

describe('[Moдуль 6 - Компонент домашней страницы]', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ProductCardComponent,
        SideMenuComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод getData ', () => {
    expect((component as any).getData).toBeTruthy();
  });
});

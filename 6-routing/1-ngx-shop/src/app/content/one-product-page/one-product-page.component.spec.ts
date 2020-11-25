import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './one-product-page.component';
import { ProductsService } from '../../services/products.service';
import { ProductPageRoutingModule } from './one-product-page-routing.module';
import { InformationComponent } from './information/information.component';
import { DescriptionComponent } from './description/description.component';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';

describe('[Moдуль 6 - Компонент страницы одного товара]', () => {
  let fixture: ComponentFixture<ProductPageComponent>;
  let component: ProductPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductPageComponent,
        InformationComponent,
        DescriptionComponent,
        FeedbacksComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        ProductPageRoutingModule,
      ],
      providers: [ProductsService],
    });
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод getData ', () => {
    expect((component as any).getData).toBeTruthy();
  });
});

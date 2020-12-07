import { ProductsService } from './services/products/products.service';
import { IProduct } from './../../../../shared/mocks/4-services/product-information';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  public title = 'Компонент страницы продукта';
  product$: Observable<IProduct> = null;

  constructor(
    private productsService: ProductsService,
  ){}

  ngOnInit(): void {
    this.product$ = this.productsService.getProduct(
      'korpus-cougar-gemini-m-385tmb00001-seryj'
    );
  }
}

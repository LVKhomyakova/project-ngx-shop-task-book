import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/4-services/categories';
import { IProduct } from '../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})

export class HomePageComponent implements OnInit{

  @Input() products: IProduct[] = null;
  @Input() categories: ICategory[] = null;

  constructor() {}

  ngOnInit(): void {
  }

  goToProduct() {}
  redirectTo(subCategory) {}
  goToBasket() {}
}

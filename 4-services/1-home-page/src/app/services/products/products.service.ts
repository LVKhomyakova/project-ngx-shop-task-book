import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('api/products/suggestion');
  }
}

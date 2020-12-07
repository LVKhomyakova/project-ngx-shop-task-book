import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../shared/mocks/4-services/product-information';

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) {}

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`api/products/${id}`);
  }
}

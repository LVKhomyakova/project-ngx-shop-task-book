import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'shared/mocks/4-services/categories';

@Injectable()
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('api/categories');
  }
}

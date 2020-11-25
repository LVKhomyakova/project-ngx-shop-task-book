import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { IProduct } from '../../../../../shared/mocks/6-routing/products';
import { CartService } from './cart.service';

@Injectable()
export class CartGuard implements CanActivate {
  constructor(
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return this.cartService.getCart().pipe(
      take(1),
      switchMap((products: IProduct[]) => {
        if (products?.length > 0) {
          return of(true);
        }
        if (!this.router.navigated) {
          this.router.navigate(['']);
        }
        return of(false);
      })
    );
  }
}

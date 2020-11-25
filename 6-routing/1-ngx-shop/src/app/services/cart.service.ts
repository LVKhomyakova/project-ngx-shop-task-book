import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan, shareReplay, concatAll, startWith, map } from 'rxjs/operators';
import { IProduct } from '../../../../../shared/mocks/6-routing/products';

interface ICart {
  product: IProduct;
  action: 'increment' | 'decrement';
}
@Injectable()
export class CartService {
  private static cart$ = new BehaviorSubject<ICart>({} as ICart);

  constructor(private readonly router: Router) {}
  private static cartStream$ = CartService.cart$.pipe(
    scan((acc, { product, action = 'increment' }: ICart) => {
      if (!product) {
        return acc;
      }
      const index = acc.findIndex((p) => p._id === product._id);
      if (index < 0) {
        acc.push({ ...product, count: 1 });
        return acc;
      }
      if (action === 'increment') {
        acc[index].count += 1;
        return acc;
      }
      if (action === 'decrement' && acc[index].count === 1) {
        acc.splice(index, 1);
        return acc;
      }
      if (action === 'decrement' && acc[index].count > 1) {
        acc[index].count -= 1;
        return acc;
      }
    }, []),
    shareReplay(1)
  );

  public updateCart(
    product: IProduct,
    action: 'increment' | 'decrement'
  ): void {
    CartService.cart$.next({ product, action });
  }
  public getCart(): Observable<any> {
    return CartService.cartStream$;
  }

  public getCountOfProducts() {
    return this.getCart().pipe(
      map((products: IProduct[]) => {
        return products.reduce((acc, product: IProduct) => {
          return (acc += product.count);
        }, 0);
      })
    );
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrlToken: string
  ){}

  intercept<T extends IRes<T>>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpResponse<T>> {

    const newHeaders = req.headers.append(
      'content-type',
      'application/json'
    );

    const newReq: HttpRequest<T> = req.clone({
      headers: newHeaders,
      url: `${this.baseUrlToken}${req.url}`,
    });


    return next.handle(newReq).pipe(
      filter((httpEvent: HttpEvent<IRes<T>>): httpEvent is HttpResponse<IRes<T>> => httpEvent instanceof HttpResponse),
      map((response: HttpResponse<IRes<T>>) => {
        return response.clone({body: response.body && response.body.data});
      }),
      catchError((): Observable<never> => {
        return EMPTY;
      })
    );
  }

}

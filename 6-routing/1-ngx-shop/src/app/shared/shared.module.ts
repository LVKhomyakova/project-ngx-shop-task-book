import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrandsService } from '../services/brands.service';
import { CategoriesService } from '../services/category.service';
import { ProductsService } from '../services/products.service';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { RatePipe } from './pipes/rate.pipe';
import { ReviewPipe } from './pipes/review.pipe';
import { InterceptorService } from './../services/interceptor.service';
import { BASE_URL_TOKEN } from './../services/config';
import { environment } from './../../environments/environment';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { CartService } from '../services/cart.service';
import { CartGuard } from '../services/cart.guard';
@NgModule({
  declarations: [StarRatingComponent, ImgUrlPipe, RatePipe, ReviewPipe],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StarRatingComponent,
    RatePipe,
    ImgUrlPipe,
    ReviewPipe,
  ],
  providers: [
    CategoriesService,
    ProductsService,
    BrandsService,
    CartService,
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        CategoriesService,
        CartGuard,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
      ],
    };
  }
}

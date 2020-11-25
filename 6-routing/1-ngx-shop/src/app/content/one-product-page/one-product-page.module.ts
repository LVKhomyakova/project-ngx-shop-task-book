import { DescriptionComponent } from './description/description.component';
import { NgModule } from '@angular/core';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { InformationComponent } from './information/information.component';
import { ProductPageRoutingModule } from './one-product-page-routing.module';
import { ProductPageComponent } from './one-product-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductPageComponent,
    InformationComponent,
    DescriptionComponent,
    FeedbacksComponent,
  ],
  imports: [ProductPageRoutingModule, SharedModule],
})
export class ProductPageModule {}

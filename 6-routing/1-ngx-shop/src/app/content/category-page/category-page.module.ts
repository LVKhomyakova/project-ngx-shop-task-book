import { Ng5SliderModule } from 'ng5-slider';
import { NgModule } from '@angular/core';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { CategoryPageComponent } from './category-page.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { BrandsComponent } from './brands/brands.component';
import { PriceInputsComponent } from './price-slider/price-inputs/price-inputs.component';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { CategoryProductComponent } from './product-card/product-card.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    CategoryPageComponent,
    PriceInputsComponent,
    PriceSliderComponent,
    BrandsComponent,
    CategoryDropdownComponent,
    CategoryProductComponent,
  ],
  imports: [CategoryPageRoutingModule, SharedModule, Ng5SliderModule],
  providers: [],
})
export class CategoryPageModule {}

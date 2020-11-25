import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {
  @Input() feedbackRate = 0;
  stars: number[] = [0, 1, 2, 3, 4];

  highlight(index: number): boolean {
    return this.feedbackRate > index;
  }

}

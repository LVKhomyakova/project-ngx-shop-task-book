import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  private word = {
    0: 'Нет отзывов',
    1: 'отзыв',
    2: 'отзыва',
    5: 'отзывов'
  };


  public transform(countOfReviews: number | undefined): string {
    if (!countOfReviews || countOfReviews === 0) {
      return this.word[0];
    }

    const dd = countOfReviews % 100;
    if ((dd >= 11) && (dd <= 19)) {
      return `${countOfReviews} ${this.word[5]}`;
    }

    const d = countOfReviews % 10;
    if (d === 1) {
      return `${countOfReviews} ${this.word[1]}`;
    }

    if ((d >= 2) && (d <= 4)) {
      return `${countOfReviews} ${this.word[2]}`;
    }

    return `${countOfReviews} ${this.word[5]}`;
  }

}



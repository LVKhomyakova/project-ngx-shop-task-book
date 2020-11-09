import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const fractionalPart = value - Math.trunc(value);
    if (fractionalPart < 0.25) {
      return Math.floor(value);
    }

    if (fractionalPart >= 0.75) {
      return Math.ceil(value);
    }

    return Math.floor(value) + 0.5;
  }
}

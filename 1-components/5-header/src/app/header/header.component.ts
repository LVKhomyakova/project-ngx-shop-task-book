import { Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() public goToBasket = new EventEmitter();
  public counter = 5;

  redirectTo() {
    this.goToBasket.emit();
  }

}

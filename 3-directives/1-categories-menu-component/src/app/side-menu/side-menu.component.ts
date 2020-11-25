import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input() categories: ICategory[] = [];
  @Output() categoryChange: EventEmitter<string> = new EventEmitter();
  currentName: string | null = null;

  redirectTo(subCategoryName: string): void {
    this.categoryChange.emit(subCategoryName);
  }

  hover(categoryName: string): void {
    this.currentName = categoryName;
  }

  mouseLeave(): void {
    this.currentName = null;
  }
}

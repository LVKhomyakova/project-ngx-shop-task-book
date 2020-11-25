import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input() categories: ICategory[] = [] as ICategory[];
  @Output() subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>();
  currentIndex: number | null = null;
  currentCategory = '';

  subCategorySelect(subCategoryName: string): void{
    this.subCategorySelectEvent.emit(subCategoryName);
  }

  showSubCategories(categoryIndex: number): void {
    this.currentIndex = categoryIndex;
  }

  collapse(categoryIndex: number): boolean {
    return  this.currentIndex !== categoryIndex;
  }

}

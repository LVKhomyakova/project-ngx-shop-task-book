import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFeedback } from '../../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {
  @Input() feedbacks: IFeedback[] = [] as IFeedback[];
  @Output() addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

  addNewFeedback(): void {
    this.addFeedbackEvent.emit('Отзыв добавлен');
  }
}

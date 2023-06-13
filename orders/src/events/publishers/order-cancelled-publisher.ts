import {
  Publisher,
  Subjects,
  OrderCancelledEvent
} from '@nerojz86/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
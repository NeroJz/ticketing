import {
  Publisher,
  Subjects,
  OrderCreatedEvent
} from '@nerojz86/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
import { Subjects, Publisher, PaymentCreatedEvent } from '@nerojz86/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
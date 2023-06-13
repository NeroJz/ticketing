import { Subjects, Publisher, ExpirationCompletedEvent } from '@nerojz86/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompletedEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

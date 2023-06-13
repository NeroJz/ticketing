import {
  Publisher,
  Subjects,
  TicketCreatedEvent
} from '@nerojz86/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
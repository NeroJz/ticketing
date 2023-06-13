import {
  Publisher,
  Subjects,
  TicketUpdatedEvent
} from '@nerojz86/common';


export class TicketUpdatePublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
import { Publisher, Subjects, TicketCreatedEvent } from '@jmstickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}

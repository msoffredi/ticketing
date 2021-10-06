import { Publisher, Subjects, TicketUpdatedEvent } from '@jmstickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}

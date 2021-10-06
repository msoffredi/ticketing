import { Publisher, OrderCreatedEvent, Subjects } from '@jmstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

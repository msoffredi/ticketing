import { Message } from 'node-nats-streaming';
import { Listener, OrderCancelledEvent, Subjects } from '@jmstickets/common';
import { queueGroupName } from './queueGroupName';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = queueGroupName;

    async onMessage(
        data: OrderCancelledEvent['data'],
        msg: Message,
    ): Promise<void> {
        // Find the ticket that the order is cancelling
        const ticket = await Ticket.findById(data.ticket.id);

        // If no ticket throw error
        if (!ticket) {
            throw new Error('Ticket not found');
        }

        // Mark the ticket as available by setting its orderId as undefined
        ticket.set({ orderId: undefined });

        // save the ticket
        await ticket.save();

        // Send an event of ticket updated
        await new TicketUpdatedPublisher(this.client).publish({
            id: ticket.id,
            version: ticket.version,
            title: ticket.title,
            price: ticket.price,
            userId: ticket.userId,
            orderId: ticket.orderId,
        });

        // ack the message
        msg.ack();
    }
}

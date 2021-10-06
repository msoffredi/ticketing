import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@jmstickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

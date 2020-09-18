import {Publisher, OrderCreatedEvent, Subjects} from '@rentwise/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}


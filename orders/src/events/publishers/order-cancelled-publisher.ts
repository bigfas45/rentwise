import {Publisher, orderCancelledEvent, Subjects} from '@rentwise/common'

export class OrderCancelledPublisher extends Publisher<orderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}


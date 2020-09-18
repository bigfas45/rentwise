import {Subjects, Listener, SubscriptionCreatedEvent, OrderStatus}  from '@rentwise/common';
import { Message } from 'node-nats-streaming';
import {queueGroupName} from './queue-group-name';
import {Order} from '../../models/orders';


export class SubscriptionCreatedListener extends Listener<SubscriptionCreatedEvent> {
  subject: Subjects.SubscriptionCreated = Subjects.SubscriptionCreated
  queueGroupName = queueGroupName

  async onMessage(data: SubscriptionCreatedEvent['data'], msg:Message) {
    
  }
}
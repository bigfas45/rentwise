import {Message} from 'node-nats-streaming'
import { Listener, orderCancelledEvent, Subjects, OrderStatus } from '@rentwise/common';
import {queueGroupName} from './queue-group-name';
import {Order} from '../../models/orders'

export class OrderCancelledListener extends Listener<orderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
  queueGroupName =queueGroupName

  async onMessage(data: orderCancelledEvent['data'], msg: Message) {
    const order = await Order.findOne ({
      _id: data.id,
      version: data.version -1
    });

    if (!order) {
      throw new Error('Order not found');
    }
    


    order.set({status: OrderStatus.Cancelled});
    await order.save();

    msg.ack();

  }
}
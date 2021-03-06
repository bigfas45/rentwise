import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';
import { OrderStatus, orderCancelledEvent, OrderDebitType } from '@rentwise/common';
import { OrderCancelledListener } from '../order-cancelled-listeners';
import { natsWrapper } from '../../../nats-wrapper';
import { Order } from '../../../models/orders';

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    amount: 10,
    userId: 'asldkfj',
    version: 0,
    debitType: OrderDebitType.Automatic,
    startDate: new Date,
    plan_code: "xfcgfhj"
  });
  await order.save();

  const data: orderCancelledEvent['data'] = {
    id: order.id,
    version: 1,
    plan: {
      id: 'asldkfj',
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, order };
};

it('updates the status of the order', async () => {
    const { listener, data, msg, order } = await setup();
    await listener.onMessage(data, msg);
    const updatedOrder = await Order.findById(order.id);
    expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
  });
  it('acks the message', async () => {
    const { listener, data, msg, order } = await setup();
    await listener.onMessage(data, msg);
    expect(msg.ack).toHaveBeenCalled();
});

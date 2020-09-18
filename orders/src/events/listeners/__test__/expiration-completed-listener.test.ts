import { ExpirationCompleteListener } from '../expiration-complete-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Plan } from '../../../models/plan';
import { Order } from '../../../models/orders';
import {
  OrderStatus,
  OrderInterval,
  OrderDebitType,
  ExirationCompleteEvent
} from '@rentwise/common';
import { Message } from 'node-nats-streaming';

import mongoose from 'mongoose';

const setup = async () => {
  const userId = mongoose.Types.ObjectId();
  const status = OrderStatus.Created;
  const expiresAt = new Date();
  const interval = OrderInterval.Monthly;
  const plan2 = mongoose.Types.ObjectId();
  const amount = 3000;
  const name = 'name';
  const description = 'description';
  const debitType = OrderDebitType.Automatic;
  const planId = mongoose.Types.ObjectId();
  const listener = new ExpirationCompleteListener(natsWrapper.client);

  const plan = Plan.build({
    id: mongoose.Types.ObjectId().toHexString(),
    returnPercentage: 2,
    title: 'dfghj',
    description: 'xcfghjk',
    minDuration: 2
  });

  await plan.save();
  const order = Order.build({
    userId: 'xcfghjhj',
    status,
    expiresAt,
    interval,
    plan,
    amount,
    name,
    description,
    debitType,
    plan_code: 'sdfghjk'
  });
  await order.save();

  const data: ExirationCompleteEvent['data'] = {
    orderId: order.id,
    plan_code: order.plan_code!
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return { listener, order, plan, data, msg };
};

it('updates the order status to cancelled', async () => {
  const { listener, order, plan, data, msg } = await setup();
  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);
  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it('emit an OrderCancelled event', async () => {
  const { listener, order, plan, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const eventData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );
  expect(eventData.id).toEqual(order.id);
});

it('ask the message', async () => {
  const { listener, order, plan, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

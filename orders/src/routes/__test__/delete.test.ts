import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Plan } from '../../models/plan';
import { Order } from '../../models/orders';
import { natsWrapper } from '../../nats-wrapper';
import { OrderStatus, OrderInterval, OrderDebitType } from '@rentwise/common';

it('marks an order as cancelled', async () => {
  // create a tciket with Ticket Model
  const plan = Plan.build({
    id: mongoose.Types.ObjectId().toHexString(),
    returnPercentage: 2,
    title: 'dfghj',
    description: 'xcfghjk',
    minDuration: 2,
  });
  await plan.save();

  const user = global.signin();

  const userId = mongoose.Types.ObjectId();
  const status = OrderStatus.Created;
  const expiresAt = 15 * 60;
  const interval = OrderInterval.Monthly;
  const amount = 3000;
  const name = 'name';
  const description = 'description';
  const debitType = OrderDebitType.Automatic;

  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
      planId: plan.id,
      userId,
      status,
      expiresAt,
      interval,
      plan,
      amount,
      name,
      description,
      debitType
    })
    .expect(201);

  // make a request to create an order

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(204);

  // expectation to make the thing is cancelled
  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it('emits a order cancelled event', async () => {
  const userId = mongoose.Types.ObjectId();
  const status = OrderStatus.Created;
  const expiresAt = 15 * 60;
  const interval = OrderInterval.Monthly;
  const amount = 3000;
  const name = 'name';
  const description = 'description';
  const debitType = OrderDebitType.Automatic;
  const plan = Plan.build({
    id: mongoose.Types.ObjectId().toHexString(),
    returnPercentage: 2,
    title: 'dfghj',
    description: 'xcfghjk',
    minDuration: 2
  });
  await plan.save();

  const user = global.signin();

  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
      planId: plan.id,
      userId,
      status,
      expiresAt,
      interval,
      plan,
      amount,
      name,
      description,
      debitType
    })
    .expect(201);

  // make a request to create an order

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(204);

  expect(natsWrapper.client.publish).toHaveBeenCalled;
});

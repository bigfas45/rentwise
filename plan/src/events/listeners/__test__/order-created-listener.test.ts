import {Message} from 'node-nats-streaming'
import {OrderCreatedEvent, OrderStatus, OrderInterval, OrderDebitType} from '@rentwise/common'
import {OrderCreatedListener} from '../order-created-listener';
import {natsWrapper} from '../../../nats-wrapper';
import {Plan} from '../../../models/plan';
import mongoose from 'mongoose';

const setup = async () => {

// create an instance of the listener
const listener = new OrderCreatedListener(natsWrapper.client);


// Create and save a ticket
const plan = Plan.build({
  title: 'concert',
  description: "99",
  returnPercentage: 2,
  minDuration: 2,
  userId: 'asdf'
});

await plan.save();

// create the fake data event 
const data: OrderCreatedEvent['data'] = {
  id: mongoose.Types.ObjectId().toHexString() ,
  version:0,
  status: OrderStatus.Created,
  userId: 'asdfgh',
  expiresAt: 'asdvb',
  name: "sdfgh",
  description: "cxghjk",
  amount: 12,
  interval: OrderInterval.Monthly,
  debitType: OrderDebitType.Automatic,

  plan: {
      id: plan.id,
      description: plan.description,
      title: plan.title,
      returnPercentage: plan.returnPercentage,
      minDuration: plan.minDuration,

  }
};
// @ts-ignore
const msg: Message = {
ack: jest.fn()
};

return {listener, plan, data, msg}

};


 
it('acks the message ',async () => {
  const {listener, plan, data, msg} = await setup();
  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();


});

it('publishes a ticket updated event', async () => {
  const {listener, plan, data, msg} = await setup();

  await listener.onMessage(data, msg);
 
  expect(natsWrapper.client.publish).toHaveBeenCalled(); 


});



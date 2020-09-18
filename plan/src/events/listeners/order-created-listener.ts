import {Message} from 'node-nats-streaming';
import {Listener,  OrderCreatedEvent, Subjects, orderCancelledEvent} from '@rentwise/common';
import {queueGroupName} from './queue-group-name';
import {Plan} from '../../models/plan';
import {PlanUpdatedPublisher} from '../publishers/plan-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;

  queueGroupName = queueGroupName;

 async onMessage(data: orderCancelledEvent['data'], msg: Message){
    // Find the ticket that the order is reserving
    const plan = await Plan.findById(data.plan.id)

    // If no ticket, throw error
    if (!plan) {
      throw new Error ('Plan not found');
    }

    // Mark the ticket as being reserved bt setting its orderId property


    // save the ticket
    await plan.save();


    await new PlanUpdatedPublisher(this.client).publish({
      id: plan.id,
    version: plan.version,
    title: plan.title,
    description: plan.description,
    userId: plan.userId,
    returnPercentage: plan.returnPercentage,
    minDuration: plan.minDuration
    });

    // ack the message 
    msg.ack();
  }

}
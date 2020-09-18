import { Message } from 'node-nats-streaming';
import { Subjects, Listener, PlanCreatedEvent } from '@rentwise/common';
import {Plan} from '../../models/plan';
import { queueGroupName } from './queue-group-name';


export class PlanCreatedListener extends Listener<PlanCreatedEvent> {
  subject: Subjects.PlanCreated = Subjects.PlanCreated;
  queueGroupName = queueGroupName;

 async onMessage(data: PlanCreatedEvent['data'], msg: Message){
    const {id, title, description, returnPercentage,minDuration } = data;
    const plan = Plan.build({
      id, title, description, returnPercentage,minDuration
    });
    await plan.save();

    msg.ack();

  }
}
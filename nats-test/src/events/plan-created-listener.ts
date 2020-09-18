import {Message} from 'node-nats-streaming';
import {Listener} from './base-listener';
import {PlanCreatedEvent} from './plan-created-event'
import { Subjects } from './subjects';

export class PlanCreatedListener extends Listener<PlanCreatedEvent> {
    subject: Subjects.PlanCreated = Subjects.PlanCreated;
    queueGroupName = 'subscribtion-service';

    onMessage(data : PlanCreatedEvent['data'], msg : Message) {
        
        console.log('Event data!', data);


        msg.ack();
    }
}

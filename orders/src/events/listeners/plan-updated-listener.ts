import {Message} from 'node-nats-streaming';
import {Subjects, Listener, PlanUpdatedEvent} from '@rentwise/common';
import {Plan} from '../../models/plan';
import {queueGroupName} from './queue-group-name';


export class PlanUpdatedListener extends Listener < PlanUpdatedEvent > {
    subject : Subjects.PlanUpdated = Subjects.PlanUpdated;
    queueGroupName = queueGroupName;


    async onMessage(data : PlanUpdatedEvent['data'], msg : Message) {
        const plan = await Plan.findByEvent(data);

        if (! plan) {
            throw new Error('Plan not found..')
        }
        const {
            id,
            title,
            description,
            returnPercentage,
            minDuration
        } = data;

        plan.set({
            id,
            title,
            description,
            returnPercentage,
            minDuration
        });
        await plan.save();

        msg.ack()
    }
};

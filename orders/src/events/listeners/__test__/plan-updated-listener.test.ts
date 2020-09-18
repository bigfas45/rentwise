import {Message} from 'node-nats-streaming'
import {PlanUpdatedEvent} from '@rentwise/common'
import mongoose from 'mongoose';
import {PlanUpdatedListener} from '../plan-updated-listener'
import {natsWrapper} from '../../../nats-wrapper';
import {Plan} from '../../../models/plan';


const setup = async () => { // Create a listener
    const listener = new PlanUpdatedListener(natsWrapper.client);

    // create and save a ticket
    const plan = Plan.build({

        id:  mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        description: 'jndjndejndjed',
        returnPercentage: 5,
        minDuration: 3
    });
    await plan.save()

    // create a fake data object
    const data: PlanUpdatedEvent['data'] = {
        version: plan.version + 1,
        id:  plan.id,
        title: 'new concert',
        description: 'jndjndejndjed fff',
        returnPercentage: 5,
        minDuration: 3,
        userId: new mongoose.Types.ObjectId().toHexString()
    }

    // create a fake msg object
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    }

    // retuen all of this stuff
    return {msg, data, plan, listener};

}


it('finds, update, and ', async () => {
    const {msg, data, plan, listener} = await setup();

    await listener.onMessage(data, msg);

    const updatedPlan = await Plan.findById(plan.id);

    expect(updatedPlan ?. title).toEqual(data.title)
    expect(updatedPlan ?. description).toEqual(data.description)
    expect(updatedPlan ?. version).toEqual(data.version)


});


it('acks the  message', async () => {
    const {msg, data, plan, listener} = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();

});


it('does not call ack if the event has a skipped version number ', async () => {
    const {msg, data, plan, listener} = await setup();

    data.version = 10;

    try {
        await listener.onMessage(data, msg)

    } catch (err) {}

    expect(msg.ack).not.toHaveBeenCalled();

});

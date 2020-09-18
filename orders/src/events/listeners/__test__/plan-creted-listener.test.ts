import {Message} from 'node-nats-streaming'
import mongoose from 'mongoose';
import {PlanCreatedEvent} from '@rentwise/common'
import {PlanCreatedListener} from '../plan-created-listener'
import {natsWrapper} from '../../../nats-wrapper';
import {Plan} from '../../../models/plan';


const setup = async () => { // create an instance of the listener
    const listener = new PlanCreatedListener(natsWrapper.client);

    // create a fake data evebt
    const data: PlanCreatedEvent['data'] = {
        version: 0,
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        description: 'jndjndejndjed',
        returnPercentage: 5,
        minDuration: 3,
        userId: new mongoose.Types.ObjectId().toHexString()
    }
    // create a fake message object
    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return {listener, data, msg}

}

it('it creates and save a ticket', async () => {

    const {listener, data, msg} = await setup()
    // call the onMessage fuction with the data object + message object

    await listener.onMessage(data, msg);


    // write assertions to make sure  a ticket was created
    const ticket = await Plan.findById(data.id);

    expect(ticket).toBeDefined();
    expect(ticket ?. title).toEqual(data.title);
    expect(ticket ?. description).toEqual(data.description);
});


it('acks the message', async () => {

    const {data, listener, msg} = await setup();
    // call the onMessage fuction with the data object + message object
    await listener.onMessage(data, msg)

    // write assertions to make sure ack function is called
    expect(msg.ack).toHaveBeenCalled();

});;

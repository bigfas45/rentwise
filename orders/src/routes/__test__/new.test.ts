import mongoose from 'mongoose';
import request from 'supertest';
import {app} from '../../app';
import {OrderStatus, OrderInterval, OrderDebitType} from '@rentwise/common';

import {Order} from '../../models/orders';
import {Plan} from '../../models/plan';
import {natsWrapper} from '../../nats-wrapper';


it('returns an error if the plan does not exist', async () => {
    
    const userId = mongoose.Types.ObjectId();
    const status = OrderStatus.Created;
    const expiresAt = 15 * 60;
    const interval = OrderInterval.Monthly;
    const plan = mongoose.Types.ObjectId();
    const amount = 3000;
    const name = "name";
    const description = "description";
    const debitType = OrderDebitType.Automatic;
    const planId = mongoose.Types.ObjectId();

    await request(app).post('/api/orders').set('Cookie', global.signin()).send({
        id: mongoose.Types.ObjectId().toHexString(),

        planId,
        userId,
        status,
        expiresAt,
        interval,
        plan,
        amount,
        name,
        description,
        debitType

    }).expect(404);
});


it('emits an order created event ', async () => {
    const userId = mongoose.Types.ObjectId();
    const status = OrderStatus.Created;
    const expiresAt = 15 * 60;
    const interval = OrderInterval.Monthly;
    const amount = 3000;
    const name = "name";
    const description = "description";
    const debitType = OrderDebitType.Automatic;

    const plan = Plan.build({
        id: mongoose.Types.ObjectId().toHexString(),
        returnPercentage: 2,
        title: 'dfghj',
        description: 'xcfghjk',
        minDuration: 2

    });
    await plan.save();

    await request(app).post('/api/orders').set('Cookie', global.signin()).send({
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
    }).expect(201);

    expect(natsWrapper.client.publish).toHaveBeenCalled();
});

import mongoose from 'mongoose';
import {OrderStatus, OrderInterval, OrderDebitType} from '@rentwise/common';
import request from 'supertest';
import {app} from '../../app';
import {Plan} from '../../models/plan';


it('fetches the order', async () => { // create a plan

    const userId = mongoose.Types.ObjectId();
    const status = OrderStatus.Created;
    const expiresAt = 15 * 60;
    const interval = OrderInterval.Monthly;
    const amount = 3000;
    const name = "name";
    const description = "description";
    const debitType = OrderDebitType.Automatic;


    const plan = Plan.build({ id: mongoose.Types.ObjectId().toHexString(),
        returnPercentage: 2,
        title: 'dfghj',
        description: 'xcfghjk',
        minDuration: 2});
    await plan.save();

    const user = global.signin();

    // make a request to build an order with this ticket
    const {body: order} = await request(app).post('/api/orders').set('Cookie', user).send({

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

    // make request to fetch the order
    const {body: fetchOrder} = await request(app).get(`/api/orders/${
        order.id
    }`).set('Cookie', user).send().expect(200);

    expect(fetchOrder.id).toEqual(order.id);

});


it('returns an error if one user tries to get another user order', async () => { // create a tucket
    const userId = mongoose.Types.ObjectId();
    const status = OrderStatus.Created;
    const expiresAt = 15 * 60;
    const interval = OrderInterval.Monthly;
    const amount = 3000;
    const name = "name";
    const description = "description";
    const debitType = OrderDebitType.Automatic;
    const plan = Plan.build({id: mongoose.Types.ObjectId().toHexString(), returnPercentage: 2,
        title: 'dfghj',
        description: 'xcfghjk',
        minDuration: 2});
    await plan.save();

    const user = global.signin();

    // make a request to build an order with this ticket
    const {body: order} = await request(app).post('/api/orders').set('Cookie', user).send({planId: plan.id,userId,
        status,
        expiresAt,
        interval,
        plan,
        amount,
        name,
        description,
        debitType}).expect(201);

    // make request to fetch the order
    await request(app).get(`/api/orders/${
        order.id
    }`).set('Cookie', global.signin()).send().expect(401);


})

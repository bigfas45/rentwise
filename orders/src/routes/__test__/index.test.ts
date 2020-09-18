import mongoose from 'mongoose';
import {OrderStatus, OrderInterval, OrderDebitType} from '@rentwise/common';

import request from 'supertest';
import {app} from '../../app';
import {Order} from '../../models/orders';
import {Plan} from '../../models/plan';

const buildPlan = async () => {
    const title = 'cshssjh';
    const description = 'jndjndejndjed';
    const returnPercentage = 5;
    const minDuration = 3;
    const plan = Plan.build({
        id: mongoose.Types.ObjectId().toHexString(),
        title,
        description,
        returnPercentage,
        minDuration

    });
    await plan.save();

    return plan;
}


it('fetches orders for a particular user', async () => { // Create three tickets

    const planOne = await buildPlan();
    const planTwo = await buildPlan();
    const planThree = await buildPlan();

    const userOne = global.signin();
    const userTwo = global.signin();

    const userId = mongoose.Types.ObjectId();
    const status = OrderStatus.Created;
    const expiresAt = 15 * 60;
    const interval = OrderInterval.Monthly;
    const amount = 3000;
    const name = "name";
    const description = "description";
    const debitType = OrderDebitType.Automatic;

    // creates one order as user #1
    await request(app).post('/api/orders').set('Cookie', userOne).send({

        planId: planOne.id,
        userId,
        status,
        expiresAt,
        interval,
        amount,
        name,
        description,
        debitType

    }).expect(201);


    // creates one order as user #2
    const {body: orderOne} = await request(app).post('/api/orders').set('Cookie', userTwo).send({

        planId: planTwo.id,
        userId,
        status,
        expiresAt,
        interval,
        amount,
        name,
        description,
        debitType

    }).expect(201);


    const {body: orderTwo} = await request(app).post('/api/orders').set('Cookie', userTwo).send({

        planId: planThree.id,
        userId,
        status,
        expiresAt,
        interval,
        amount,
        name,
        description,
        debitType

    }).expect(201);


    const response = await request(app).get('/api/orders').set('Cookie', userTwo).expect(200);


    expect(response.body.length).toEqual(2);
    expect(response.body[0].id).toEqual(orderOne.id);
    expect(response.body[1].id).toEqual(orderTwo.id)
    expect(response.body[0].plan.id).toEqual(planTwo.id)
    expect(response.body[1].plan.id).toEqual(planThree.id)


})

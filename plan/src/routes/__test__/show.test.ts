import request from 'supertest';
import {app} from '../../app';
import {Plan} from '../../models/plan';
import mongoose from 'mongoose';


it('It returns a 400 if the plans is not found', async () => {

    const id = new mongoose.Types.ObjectId().toHexString();

    await request(app).get(`/api/plan/jdhdhdhdhdh/${id}`).send().expect(404);

});


it('It returns the plan if the ticket is found', async () => {
    const title = 'cshssjh';
    const description = 'jndjndejndjed';
    const returnPercentage = 5;
    const minDuration = 3;

    const response = await request(app).post('/api/plan').set('Cookie', global.signin()).send({title, description, returnPercentage, minDuration}).expect(201);

    const planResponse = await request(app).get(`/api/plan/${
        response.body.id
    }`).send().expect(200);

    expect(planResponse.body.title).toEqual(title);
    expect(planResponse.body.description).toEqual(description);
    expect(planResponse.body.returnPercentage).toEqual(returnPercentage);
    expect(planResponse.body.minDuration).toEqual(minDuration);

});

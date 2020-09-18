import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';
import { Plan } from '../../models/plan';

it('return a 404 if the provided id does not exist', async () => {
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/plan/${id}`)
    .set('Cookie', global.signin())
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(404);
});

it('return a 401 if the user is not authenticated', async () => {
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/plan/${id}`)
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(401);
});

it('return a 401 if the user does not own the plan', async () => {
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const response = await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    });
  await request(app)
    .put(`/api/plan/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(401);
});

it('return a 400 if the user provides an invalid title or description', async () => {
  const cookie = global.signin();
  const response = await request(app)
    .post('/api/plan')
    .set('Cookie', cookie)
    .send({
      title: 'fvfvfvfvfv',
      description: '',
      returnPercentage: 5,
      minDuration: 3
    });

  await request(app)
    .put(`/api/plan/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      description: 'jndjndejndjed',
      returnPercentage: 5,
      minDuration: 3
    })
    .expect(400);

  await request(app)
    .put(`/api/plan/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'ceeded',
      description: '',
      returnPercentage: 5,
      minDuration: 3
    })
    .expect(400);
});

it('updates the plan provided vaild input', async () => {
  const title = 'edeffrfrfrf';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/plan')
    .set('Cookie', cookie)
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    });

  await request(app)
    .put(`/api/plan/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(200);

  const planResponse = await request(app)
    .get(`/api/plan/${response.body.id}`)
    .send();

  expect(planResponse.body.title).toEqual(title);
  expect(planResponse.body.description).toEqual(description);
});

it('publishes an event', async () => {
  const title = 'edeffrfrfrf';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/plan')
    .set('Cookie', cookie)
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    });

  await request(app)
    .put(`/api/plan/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

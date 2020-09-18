import request from 'supertest';
import { app } from '../../app';
import { Plan } from '../../models/plan';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handeler listening to /api/plans from post request', async () => {
  const response = await request(app).post('/api/plan').send({});

  expect(response.status).not.toEqual(404);
});

it('return a status other than 401 if the user is signed in ', async () => {
  const response = await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({});
  expect(response.status).not.toEqual(401);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/plan').send({}).expect(401);
});

it('returns an error if an invalid title is provided', async () => {
  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({ title: '', description: '10' })
    .expect(400);

  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({ description: '10' })
    .expect(400);
});

it('returns an error if an invalid description is provided', async () => {
  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({ title: 'scededce', description: '' })
    .expect(400);

  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({ title: '10' })
    .expect(400);
});

it('creates a plan with valid inputs', async () => {
  let plans = await Plan.find({});

  expect(plans.length).toEqual(0);

  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;

  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({ title, description, returnPercentage, minDuration })
    .expect(201);

  plans = await Plan.find({});
  expect(plans.length).toEqual(1);
  expect(plans[0].title).toEqual(title);
  expect(plans[0].description).toEqual(description);
  expect(plans[0].returnPercentage).toEqual(returnPercentage);
  expect(plans[0].minDuration).toEqual(minDuration);
});

it('publishes an event', async () => {
  const title = 'cshssjh';
  const description = 'jndjndejndjed';
  const returnPercentage = 5;
  const minDuration = 3;
  await request(app)
    .post('/api/plan')
    .set('Cookie', global.signin())
    .send({
      title,
      description,
      returnPercentage,
      minDuration
    })
    .expect(201);
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

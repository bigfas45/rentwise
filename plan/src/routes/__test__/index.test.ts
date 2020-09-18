import request from 'supertest';
import { app } from '../../app';

const createPlan = () => {
  return request(app).post('/api/plan').set('Cookie', global.signin()).send({
    title: 'cshssjh',
    description: 'jndjndejndjed',
    returnPercentage: 5,
    minDuration: 3
  });
};

it('can fetch a list of ticket', async () => {
  await createPlan();
  await createPlan();
  await createPlan();

  const response = await request(app).get('/api/plan').send().expect(200);

  expect(response.body.length).toEqual(3);
});

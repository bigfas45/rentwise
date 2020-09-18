import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({ email: 'dimeji@nasdng.com', password: 'ifeoluwass33' })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1@nasdng.com',
      password: 'ifeoluwass33',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({ email: 'afasina1@nasdng.com', password: 'ifeoluwass33ddd' })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1@nasdng.com',
      password: 'ifeoluwass33',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({ email: 'afasina1@nasdng.com', password: 'ifeoluwass33' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});

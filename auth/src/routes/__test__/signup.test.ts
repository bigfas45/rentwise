import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
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
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1',
      password: 'ifeoluwass33',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1',
      password: 'ifeol',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'ifeol',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      pin: '1234'
    })
    .expect(400);
});

it('disallows duplicate email', async () => {
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
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
        email: 'afasina1@nasdng.com',
        password: 'ifeoluwass33',
        telephone: '08148242888',
        userType: '1',
        firstname: 'Dimeji',
        lastname: 'Fasina',
        pin: '1234'
      })    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});

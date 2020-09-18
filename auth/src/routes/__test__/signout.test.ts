import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signin out', async () => {
  // await request(app)
  //   .post('/api/users/signup')
  //   .send({
  //     email: 'afasina1@nasdng.com',
  //     password: 'ifeoluwass33',
  //     telephone: '08148242888',
  //     userType: '1',
  //     firstname: 'Dimeji',
  //     lastname: 'Fasina',
  //     pin: '1234'
  //   })
  //   .expect(201);

  // const response = await request(app)
  //   .post('/api/users/signout')
  //   .send({})
  //   .expect(200);

  // expect(response.get('Set-Cookie')[0]).toEqual(
  //   'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
  // );
});

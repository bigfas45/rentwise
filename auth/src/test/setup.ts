import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import { validateRequest, BadRequestError,VerificationStatus } from '@rentwise/common';

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
    }
  }
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdf';

  mongo = new MongoMemoryServer();
  const mongouri = await mongo.getUri();

  await mongoose.connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = async () => {
  const expiration = new Date();
  expiration.setSeconds(expiration.getSeconds() + 60 * 60);
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'afasina1@nasdng.com',
      password: 'ifeoluwass33',
      telephone: '08148242888',
      userType: '1',
      firstname: 'Dimeji',
      lastname: 'Fasina',
      expiresAt: expiration,
      verification: VerificationStatus.Unverified
    })
    .expect(201);

  const cookie = response.get('Set-Cookie');

  return cookie;
};

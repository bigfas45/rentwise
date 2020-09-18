import Queue from 'bull';
import {ExpirationExpirationPublisher} from '../events/publishers/expiration-verification-publisher';
import {natsWrapper} from '../nats-wrapper'

interface UserPayload {
  userId: string;
}

const UserexpirationQueue = new Queue<UserPayload>('user:expiration', {
  redis: {
    host: process.env.REDIS_HOST
  }
});
UserexpirationQueue.process(async job => {
  new ExpirationExpirationPublisher(natsWrapper.client).publish({
    userId: job.data.userId,
    
  })
});

export { UserexpirationQueue };

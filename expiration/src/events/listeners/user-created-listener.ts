import { Listener, UserCreatedEvent, Subjects } from '@rentwise/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-verification-name';
import {UserexpirationQueue} from '../../queues/expiration-verification-queue'


export class UserCreatedListener extends Listener<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: UserCreatedEvent['data'], msg: Message) {
      const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
      console.log('waiting this many miliseconds to process the job:', delay)


      await UserexpirationQueue.add({
        userId: data.id,
       
      },
       {
        delay
      } 
      );

      msg.ack();
  }

}
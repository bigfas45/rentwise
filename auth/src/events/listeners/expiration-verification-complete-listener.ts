import {
  Listener,
  Subjects,
 ExirationVerificationEvent,
  VerificationStatus
} from '@rentwise/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { User } from '../../models/user';


export class ExpirationVerificationListener extends Listener<ExirationVerificationEvent> {
  subject: Subjects.VerificationCOmplete = Subjects.VerificationCOmplete
  queueGroupName = queueGroupName

  async onMessage(data:ExirationVerificationEvent['data'], msg: Message ) {
    const user = await User.findById(data.userId);

    if (!user) {
      throw new Error('User not found');
    }

    if(user.verification === VerificationStatus.Unverified){
      user.set({
        verification: VerificationStatus.Expire
      });
    }

    

    await user.save();

    msg.ack();

  }
}

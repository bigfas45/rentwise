import {Publisher, UserCreatedEvent, Subjects} from '@rentwise/common';


export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
}

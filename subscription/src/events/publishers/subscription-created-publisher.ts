import {Subjects, Publisher, SubscriptionCreatedEvent } from '@rentwise/common';


export class SubscriptionCreatedPublisher extends Publisher<SubscriptionCreatedEvent>{
  subject: Subjects.SubscriptionCreated = Subjects.SubscriptionCreated;
}
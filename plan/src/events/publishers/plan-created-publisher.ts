import {Publisher, Subjects, PlanCreatedEvent} from '@rentwise/common';

export class PlanCreatedPublisher extends Publisher<PlanCreatedEvent> {
  subject: Subjects.PlanCreated = Subjects.PlanCreated
}


import {Publisher, Subjects, PlanUpdatedEvent} from '@rentwise/common';

export class PlanUpdatedPublisher extends Publisher<PlanUpdatedEvent> {
  subject: Subjects.PlanUpdated = Subjects.PlanUpdated
}


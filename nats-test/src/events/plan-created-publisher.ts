import {Publisher} from './base-publisher';
import {PlanCreatedEvent} from './plan-created-event';
import {Subjects} from './subjects';


export class PlanCreatedPublisher extends Publisher<PlanCreatedEvent> {
  subject: Subjects.PlanCreated = Subjects.PlanCreated;
}
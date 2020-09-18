import {Subjects} from './subjects';



export interface PlanCreatedEvent {
  subject: Subjects.PlanCreated;

  data: {
    id: string;
    title: string;
    description: string;
    returnPercentage: number;
    minDuration: number;

  };
}
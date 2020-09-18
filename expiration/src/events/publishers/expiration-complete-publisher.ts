import {Subjects, Publisher, ExirationCompleteEvent} from '@rentwise/common';

export class ExpirationCompletePublisher extends Publisher<ExirationCompleteEvent> {
  subject: Subjects.ExpirationCOmplete = Subjects.ExpirationCOmplete
  
}
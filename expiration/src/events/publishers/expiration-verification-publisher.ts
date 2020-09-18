import {Subjects, Publisher, ExirationVerificationEvent} from '@rentwise/common';

export class ExpirationExpirationPublisher extends Publisher<ExirationVerificationEvent> {
  subject: Subjects.VerificationCOmplete = Subjects.VerificationCOmplete
  
}
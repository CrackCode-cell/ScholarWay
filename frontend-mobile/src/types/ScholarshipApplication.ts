import { Scholarship } from './Scholarship';

export type ApplicationStatus =
  | 'PLANNING'
  | 'STARTED'
  | 'SUBMITTED'
  | 'AWARDED'
  | 'NOT_AWARDED';

export interface ScholarshipApplication {
  applicationId: number;
  scholarship: Scholarship;
  status: ApplicationStatus;
  notes: string;
}

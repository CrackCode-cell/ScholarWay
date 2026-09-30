export type ScholarshipType =
  | 'MERIT'
  | 'NEED_BASED'
  | 'MERIT_AND_NEED';

export interface ScholarshipRequirements {
  requirementId: number;
  minimumGpa: number | null;
  major: string | null;
  location: string | null;
  financialNeedRequired: boolean | null;
  fafsaRequired: boolean | null;
  requiredActivity: string | null;
}

export interface Scholarship {
  scholarshipId: number;
  name: string;
  provider: string;
  description: string;
  awardAmount: number;
  deadline: string;
  applicationUrl: string;
  status: string;
  scholarshipType: ScholarshipType;
  requirements: ScholarshipRequirements | null;
}

export interface MatchingResult {
  scholarshipId: number;
  scholarshipName: string;
  eligible: boolean;
  score: number;
  label: string;

  gpaMatch: boolean;
  majorMatch: boolean;
  locationMatch: boolean;
  financialNeedMatch: boolean;
  fafsaMatch: boolean;
  activitiesMatch: boolean;
}

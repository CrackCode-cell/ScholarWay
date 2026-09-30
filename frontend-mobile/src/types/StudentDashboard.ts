import { Student } from './Student';
import { Scholarship } from './Scholarship';
import { ScholarshipApplication } from './ScholarshipApplication';
import { MatchingResult } from './MatchingResult';
import { SavedScholarship } from './SavedScholarship';

export interface StudentDashboard {
  student: Student;
  savedScholarships: SavedScholarship[];
  applications: ScholarshipApplication[];
  matches: MatchingResult[];
}

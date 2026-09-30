import { MatchingResult } from '../types/MatchingResult';

const API_URL = 'http://localhost:8080/api/matching';

export async function getMatchesForStudent(
  studentId: number
): Promise<MatchingResult[]> {
  const response = await fetch(
    `${API_URL}/students/${studentId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch scholarship matches. Status: ${response.status}`
    );
  }

  const data: MatchingResult[] = await response.json();

  return data;
}

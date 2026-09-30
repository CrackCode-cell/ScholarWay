import { StudentDashboard } from '../types/StudentDashboard';

const API_URL = 'http://localhost:8080/api/dashboard';

export async function getDashboard(
  studentId: number
): Promise<StudentDashboard> {
  const response = await fetch(
    `${API_URL}/${studentId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load dashboard. Status: ${response.status}`
    );
  }

  return response.json();
}

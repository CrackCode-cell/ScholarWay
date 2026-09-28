import { Scholarship } from '@/types/Scholarship';

const API_URL = 'http://localhost:8080/api/scholarships';

export async function getScholarships(): Promise<Scholarship[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch scholarships');
  }

  return response.json();
}

export async function getScholarshipById(
  id: number
): Promise<Scholarship> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch scholarship');
  }

  return response.json();
}

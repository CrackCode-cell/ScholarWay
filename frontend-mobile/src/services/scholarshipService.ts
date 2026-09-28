import { Scholarship } from '@/types/Scholarship';

export async function getScholarships(): Promise<Scholarship[]> {
  const response = await fetch(
    'http://localhost:8080/api/scholarships'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch scholarships');
  }

  return response.json();
}

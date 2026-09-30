import { Scholarship } from '../types/Scholarship';

const API_URL =
  'http://localhost:8080/api/scholarships';

export async function getScholarships(): Promise<
  Scholarship[]
> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch scholarships. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getScholarshipById(
  id: number
): Promise<Scholarship> {
  const response = await fetch(
    `${API_URL}/${id}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch scholarship. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function searchScholarships(
  name: string
): Promise<Scholarship[]> {
  const response = await fetch(
    `${API_URL}/search?name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to search scholarships. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getScholarshipsByType(
  scholarshipType: string
): Promise<Scholarship[]> {
  const response = await fetch(
    `${API_URL}/type?scholarshipType=${encodeURIComponent(
      scholarshipType
    )}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to filter scholarships. Status: ${response.status}`
    );
  }

  return response.json();
}

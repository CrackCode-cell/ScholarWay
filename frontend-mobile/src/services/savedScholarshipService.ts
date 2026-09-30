import { SavedScholarship } from '../types/SavedScholarship';

const API_URL = 'http://localhost:8080/api/saved-scholarships';

export async function saveScholarship(
  studentId: number,
  scholarshipId: number
): Promise<SavedScholarship> {
  const response = await fetch(
    `${API_URL}/${studentId}/${scholarshipId}`,
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to save scholarship. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getSavedScholarships(
  studentId: number
): Promise<SavedScholarship[]> {
  const response = await fetch(
    `${API_URL}/${studentId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load saved scholarships. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function isScholarshipSaved(
  studentId: number,
  scholarshipId: number
): Promise<boolean> {
  const response = await fetch(
    `${API_URL}/${studentId}/${scholarshipId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to check saved scholarship. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function removeSavedScholarship(
  studentId: number,
  scholarshipId: number
): Promise<void> {
  const response = await fetch(
    `${API_URL}/${studentId}/${scholarshipId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to remove scholarship. Status: ${response.status}`
    );
  }
}

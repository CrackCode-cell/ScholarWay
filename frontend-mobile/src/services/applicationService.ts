import {
  ApplicationStatus,
  ScholarshipApplication,
} from '../types/ScholarshipApplication';

const API_URL = 'http://localhost:8080/api/applications';

export async function createApplication(
  studentId: number,
  scholarshipId: number
): Promise<ScholarshipApplication> {
  const response = await fetch(
    `${API_URL}/${studentId}/${scholarshipId}`,
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to create application. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getApplications(
  studentId: number
): Promise<ScholarshipApplication[]> {
  const response = await fetch(
    `${API_URL}/student/${studentId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load applications. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getApplication(
  applicationId: number
): Promise<ScholarshipApplication> {
  const response = await fetch(
    `${API_URL}/${applicationId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load application. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function updateApplicationStatus(
  applicationId: number,
  status: ApplicationStatus
): Promise<ScholarshipApplication> {
  const response = await fetch(
    `${API_URL}/${applicationId}/status`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to update application status. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function updateApplicationNotes(
  applicationId: number,
  notes: string
): Promise<ScholarshipApplication> {
  const response = await fetch(
    `${API_URL}/${applicationId}/notes`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notes,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to update application notes. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function deleteApplication(
  applicationId: number
): Promise<void> {
  const response = await fetch(
    `${API_URL}/${applicationId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to delete application. Status: ${response.status}`
    );
  }
}

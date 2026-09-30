import { Scholarship, ScholarshipType } from '../types/Scholarship';

const API_URL = 'http://localhost:8080/api/scholarships';

async function handleResponse(
  response: Response,
  message: string
) {
  if (!response.ok) {
    throw new Error(message);
  }

  return response.json();
}

export async function getScholarships(): Promise<Scholarship[]> {
  const response = await fetch(API_URL);

  return handleResponse(
    response,
    'Unable to load scholarships.'
  );
}

export async function getScholarshipById(
  id: number
): Promise<Scholarship> {
  const response = await fetch(`${API_URL}/${id}`);

  return handleResponse(
    response,
    'Unable to load scholarship.'
  );
}

export async function searchScholarships(
  name: string
): Promise<Scholarship[]> {
  const response = await fetch(
    `${API_URL}/search?name=${encodeURIComponent(name)}`
  );

  return handleResponse(
    response,
    'Unable to search scholarships.'
  );
}

export async function getScholarshipsByType(
  scholarshipType: ScholarshipType
): Promise<Scholarship[]> {
  const response = await fetch(
    `${API_URL}/type?scholarshipType=${encodeURIComponent(
      scholarshipType
    )}`
  );

  return handleResponse(
    response,
    'Unable to filter scholarships.'
  );
}

export async function filterScholarships(
  name?: string,
  status?: string,
  scholarshipType?: ScholarshipType
): Promise<Scholarship[]> {
  const params = new URLSearchParams();

  if (name?.trim()) {
    params.append('name', name.trim());
  }

  if (status?.trim()) {
    params.append('status', status.trim());
  }

  if (scholarshipType) {
    params.append(
      'scholarshipType',
      scholarshipType
    );
  }

  const query = params.toString();

  const url = query
    ? `${API_URL}/filter?${query}`
    : API_URL;

  const response = await fetch(url);

  return handleResponse(
    response,
    'Unable to filter scholarships.'
  );
}

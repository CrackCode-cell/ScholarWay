import { Student } from '../types/Student';

const API_URL = 'http://localhost:8080/api/students';

export async function createStudent(
  student: Omit<Student, 'studentId'>
): Promise<Student> {
  const response = await fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to create student. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function getStudent(
  studentId: number
): Promise<Student> {
  const response = await fetch(
    `${API_URL}/${studentId}`
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load student. Status: ${response.status}`
    );
  }

  return response.json();
}

export async function updateStudent(
  studentId: number,
  student: Omit<Student, 'studentId'>
): Promise<Student> {
  const response = await fetch(
    `${API_URL}/${studentId}`,
    {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(student),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to update student. Status: ${response.status}`
    );
  }

  return response.json();
}

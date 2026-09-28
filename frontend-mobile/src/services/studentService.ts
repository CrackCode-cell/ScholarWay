import { Student } from '@/types/Student';

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
    throw new Error('Failed to save student');
  }

  return response.json();
}

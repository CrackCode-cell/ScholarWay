package com.scholarway.student;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudent(Long studentId) {
        return studentRepository.findById(studentId)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Student not found"
                        )
                );
    }

    public Student updateStudent(
            Long studentId,
            Student updatedStudent
    ) {
        Student existingStudent = getStudent(studentId);

        existingStudent.setName(
                updatedStudent.getName()
        );

        existingStudent.setGpa(
                updatedStudent.getGpa()
        );

        existingStudent.setMajor(
                updatedStudent.getMajor()
        );

        existingStudent.setInterests(
                updatedStudent.getInterests()
        );

        existingStudent.setLocation(
                updatedStudent.getLocation()
        );

        existingStudent.setFinancialNeed(
                updatedStudent.getFinancialNeed()
        );

        existingStudent.setFafsaCompleted(
                updatedStudent.getFafsaCompleted()
        );

        existingStudent.setActivities(
                updatedStudent.getActivities()
        );

        return studentRepository.save(existingStudent);
    }
}

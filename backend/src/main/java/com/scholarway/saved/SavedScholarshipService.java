package com.scholarway.saved;

import java.util.List;

import org.springframework.stereotype.Service;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.scholarship.ScholarshipRepository;
import com.scholarway.student.Student;
import com.scholarway.student.StudentRepository;

@Service
public class SavedScholarshipService {

    private final SavedScholarshipRepository savedScholarshipRepository;
    private final StudentRepository studentRepository;
    private final ScholarshipRepository scholarshipRepository;

    public SavedScholarshipService(
            SavedScholarshipRepository savedScholarshipRepository,
            StudentRepository studentRepository,
            ScholarshipRepository scholarshipRepository) {

        this.savedScholarshipRepository =
                savedScholarshipRepository;

        this.studentRepository =
                studentRepository;

        this.scholarshipRepository =
                scholarshipRepository;
    }

    public SavedScholarship saveScholarship(
            Long studentId,
            Long scholarshipId) {

        if (savedScholarshipRepository
                .existsByStudentStudentIdAndScholarshipScholarshipId(
                        studentId,
                        scholarshipId)) {

            throw new IllegalStateException(
                    "Scholarship is already saved.");
        }

        Student student =
                studentRepository.findById(studentId)
                        .orElseThrow();

        Scholarship scholarship =
                scholarshipRepository.findById(scholarshipId)
                        .orElseThrow();

        SavedScholarship savedScholarship =
                new SavedScholarship(
                        student,
                        scholarship);

        return savedScholarshipRepository
                .save(savedScholarship);
    }

    public List<SavedScholarship> getSavedScholarships(
            Long studentId) {

        return savedScholarshipRepository
                .findByStudentStudentId(studentId);
    }

    public boolean isScholarshipSaved(
            Long studentId,
            Long scholarshipId) {

        return savedScholarshipRepository
                .existsByStudentStudentIdAndScholarshipScholarshipId(
                        studentId,
                        scholarshipId);
    }

    public void removeSavedScholarship(
            Long studentId,
            Long scholarshipId) {

        savedScholarshipRepository
                .deleteByStudentStudentIdAndScholarshipScholarshipId(
                        studentId,
                        scholarshipId);
    }
}

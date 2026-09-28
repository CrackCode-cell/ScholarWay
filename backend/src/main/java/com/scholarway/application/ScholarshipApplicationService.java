package com.scholarway.application;

import java.util.List;

import org.springframework.stereotype.Service;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.scholarship.ScholarshipRepository;
import com.scholarway.student.Student;
import com.scholarway.student.StudentRepository;

@Service
public class ScholarshipApplicationService {

    private final ScholarshipApplicationRepository applicationRepository;
    private final StudentRepository studentRepository;
    private final ScholarshipRepository scholarshipRepository;

    public ScholarshipApplicationService(
            ScholarshipApplicationRepository applicationRepository,
            StudentRepository studentRepository,
            ScholarshipRepository scholarshipRepository) {

        this.applicationRepository =
                applicationRepository;

        this.studentRepository =
                studentRepository;

        this.scholarshipRepository =
                scholarshipRepository;
    }

    public ScholarshipApplication createApplication(
            Long studentId,
            Long scholarshipId,
            ApplicationStatus status,
            String notes) {

        if (applicationRepository
                .existsByStudentStudentIdAndScholarshipScholarshipId(
                        studentId,
                        scholarshipId)) {

            throw new IllegalStateException(
                    "Application already exists.");
        }

        Student student =
                studentRepository.findById(studentId)
                        .orElseThrow();

        Scholarship scholarship =
                scholarshipRepository.findById(scholarshipId)
                        .orElseThrow();

        ScholarshipApplication application =
                new ScholarshipApplication(
                        student,
                        scholarship,
                        status,
                        notes);

        return applicationRepository.save(application);
    }

    public List<ScholarshipApplication> getApplications(
            Long studentId) {

        return applicationRepository
                .findByStudentStudentId(studentId);
    }

    public ScholarshipApplication getApplicationById(
            Long applicationId) {

        return applicationRepository
                .findById(applicationId)
                .orElseThrow();
    }

    public ScholarshipApplication updateStatus(
            Long applicationId,
            ApplicationStatus status) {

        ScholarshipApplication application =
                applicationRepository
                        .findById(applicationId)
                        .orElseThrow();

        application.setStatus(status);

        return applicationRepository.save(application);
    }

    public ScholarshipApplication updateNotes(
            Long applicationId,
            String notes) {

        ScholarshipApplication application =
                applicationRepository
                        .findById(applicationId)
                        .orElseThrow();

        application.setNotes(notes);

        return applicationRepository.save(application);
    }

    public void deleteApplication(
            Long applicationId) {

        applicationRepository.deleteById(
                applicationId);
    }
}

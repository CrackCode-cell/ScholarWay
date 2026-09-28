package com.scholarway.dashboard;

import java.util.List;

import org.springframework.stereotype.Service;

import com.scholarway.application.ScholarshipApplication;
import com.scholarway.application.ScholarshipApplicationRepository;
import com.scholarway.matching.MatchingResult;
import com.scholarway.matching.MatchingService;
import com.scholarway.saved.SavedScholarship;
import com.scholarway.saved.SavedScholarshipRepository;
import com.scholarway.student.Student;
import com.scholarway.student.StudentRepository;

@Service
public class DashboardService {

    private final StudentRepository studentRepository;
    private final SavedScholarshipRepository savedScholarshipRepository;
    private final ScholarshipApplicationRepository applicationRepository;
    private final MatchingService matchingService;

    public DashboardService(
            StudentRepository studentRepository,
            SavedScholarshipRepository savedScholarshipRepository,
            ScholarshipApplicationRepository applicationRepository,
            MatchingService matchingService) {

        this.studentRepository =
                studentRepository;

        this.savedScholarshipRepository =
                savedScholarshipRepository;

        this.applicationRepository =
                applicationRepository;

        this.matchingService =
                matchingService;
    }

    public StudentDashboard getDashboard(
            Long studentId) {

        Student student =
                studentRepository.findById(studentId)
                        .orElseThrow();

        List<SavedScholarship> savedScholarships =
                savedScholarshipRepository
                        .findByStudentStudentId(studentId);

        List<ScholarshipApplication> applications =
                applicationRepository
                        .findByStudentStudentId(studentId);

        List<MatchingResult> matches =
                matchingService
                        .getMatchesForStudent(student);

        return new StudentDashboard(
                student,
                savedScholarships,
                applications,
                matches);
    }
}

package com.scholarway.matching;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.scholarship.ScholarshipRequirements;
import com.scholarway.scholarship.ScholarshipService;
import com.scholarway.student.Student;
import com.scholarway.student.StudentService;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchingService {

    private final StudentService studentService;
    private final ScholarshipService scholarshipService;
    private final EligibilityService eligibilityService;

    public MatchingService(
            StudentService studentService,
            ScholarshipService scholarshipService,
            EligibilityService eligibilityService
    ) {
        this.studentService = studentService;
        this.scholarshipService = scholarshipService;
        this.eligibilityService = eligibilityService;
    }

    public List<MatchingResult> getMatchesForStudent(
            Long studentId
    ) {
        Student student =
                studentService.getStudent(studentId);

        List<Scholarship> scholarships =
                scholarshipService.getAllScholarships();

        List<MatchingResult> results =
                new ArrayList<>();

        for (Scholarship scholarship : scholarships) {

            ScholarshipRequirements requirements =
                    scholarship.getRequirements();

            boolean eligible =
                    eligibilityService.isEligible(
                            student,
                            requirements
                    );

            boolean gpaMatch =
                    checkGpa(student, requirements);

            boolean majorMatch =
                    checkMajor(student, requirements);

            boolean locationMatch =
                    checkLocation(student, requirements);

            boolean financialNeedMatch =
                    checkFinancialNeed(
                            student,
                            requirements
                    );

            boolean fafsaMatch =
                    checkFafsa(
                            student,
                            requirements
                    );

            boolean activitiesMatch =
                    checkActivity(
                            student,
                            requirements
                    );

            int score = 0;

            if (gpaMatch) {
                score += 20;
            }

            if (majorMatch) {
                score += 20;
            }

            if (locationMatch) {
                score += 15;
            }

            if (financialNeedMatch) {
                score += 20;
            }

            if (fafsaMatch) {
                score += 10;
            }

            if (activitiesMatch) {
                score += 15;
            }

            String label =
                    getLabel(score);

            results.add(
                    new MatchingResult(
                            scholarship.getScholarshipId(),
                            scholarship.getName(),
                            eligible,
                            score,
                            label,
                            gpaMatch,
                            majorMatch,
                            locationMatch,
                            financialNeedMatch,
                            fafsaMatch,
                            activitiesMatch
                    )
            );
        }

        return results;
    }

    private boolean checkGpa(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getMinimumGpa() == null) {
            return true;
        }

        if (student.getGpa() == null) {
            return false;
        }

        return student.getGpa()
                >= requirements.getMinimumGpa();
    }

    private boolean checkMajor(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getMajor() == null ||
                requirements.getMajor().isBlank()) {
            return true;
        }

        if (student.getMajor() == null) {
            return false;
        }

        return student.getMajor()
                .equalsIgnoreCase(
                        requirements.getMajor()
                );
    }

    private boolean checkLocation(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getLocation() == null ||
                requirements.getLocation().isBlank()) {
            return true;
        }

        if (student.getLocation() == null) {
            return false;
        }

        return student.getLocation()
                .equalsIgnoreCase(
                        requirements.getLocation()
                );
    }

    private boolean checkFinancialNeed(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getFinancialNeedRequired()
                        == null ||
                !requirements.getFinancialNeedRequired()) {
            return true;
        }

        return Boolean.TRUE.equals(
                student.getFinancialNeed()
        );
    }

    private boolean checkFafsa(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getFafsaRequired()
                        == null ||
                !requirements.getFafsaRequired()) {
            return true;
        }

        return Boolean.TRUE.equals(
                student.getFafsaCompleted()
        );
    }

    private boolean checkActivity(
            Student student,
            ScholarshipRequirements requirements
    ) {
        if (requirements == null ||
                requirements.getRequiredActivity()
                        == null ||
                requirements.getRequiredActivity()
                        .isBlank()) {
            return true;
        }

        if (student.getActivities() == null) {
            return false;
        }

        return student.getActivities()
                .toLowerCase()
                .contains(
                        requirements
                                .getRequiredActivity()
                                .toLowerCase()
                );
    }

    private String getLabel(int score) {

        if (score >= 95) {
            return "Excellent";
        }

        if (score >= 80) {
            return "Strong";
        }

        if (score >= 65) {
            return "Good";
        }

        return "Low";
    }
}

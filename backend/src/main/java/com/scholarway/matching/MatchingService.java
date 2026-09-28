package com.scholarway.matching;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.scholarship.ScholarshipRepository;
import com.scholarway.scholarship.ScholarshipRequirements;
import com.scholarway.student.Student;

@Service
public class MatchingService {

    private final ScholarshipRepository scholarshipRepository;
    private final EligibilityService eligibilityService;

    public MatchingService(
            ScholarshipRepository scholarshipRepository,
            EligibilityService eligibilityService) {

        this.scholarshipRepository =
                scholarshipRepository;

        this.eligibilityService =
                eligibilityService;
    }

    public int calculateMatchScore(
            Student student,
            ScholarshipRequirements requirements) {

        int score = 0;

        if (student.getGpa() >= requirements.getMinimumGpa()) {
            score += 20;
        }

        if (student.getMajor()
                .equalsIgnoreCase(requirements.getMajor())) {
            score += 20;
        }

        if (student.getLocation()
                .equalsIgnoreCase(requirements.getLocation())) {
            score += 15;
        }

        if (!requirements.getFinancialNeedRequired()
                || student.getFinancialNeed()) {
            score += 20;
        }

        if (!requirements.getFafsaRequired()
                || student.getFafsaCompleted()) {
            score += 10;
        }

        if (student.getActivities()
                .toLowerCase()
                .contains(
                        requirements
                                .getRequiredActivity()
                                .toLowerCase())) {
            score += 15;
        }

        return score;
    }

    public String getMatchLabel(int score) {

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

    public List<MatchingResult> getMatchesForStudent(
            Student student) {

        List<Scholarship> scholarships =
                scholarshipRepository.findAll();

        List<MatchingResult> results =
                new ArrayList<>();

        for (Scholarship scholarship : scholarships) {

            ScholarshipRequirements requirements =
                    scholarship.getRequirements();

            boolean eligible =
                    eligibilityService.isEligible(
                            student,
                            requirements);

            int score =
                    calculateMatchScore(
                            student,
                            requirements);

            String label =
                    getMatchLabel(score);

            MatchingResult result =
                    new MatchingResult(
                            scholarship.getScholarshipId(),
                            scholarship.getName(),
                            eligible,
                            score,
                            label);

            results.add(result);
        }

        return results;
    }
}

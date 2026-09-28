package com.scholarway.matching;

import java.util.List;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.scholarship.ScholarshipRepository;
import com.scholarway.student.Student;
import com.scholarway.student.StudentRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/matching")
public class MatchingController {

    private final MatchingService matchingService;
    private final StudentRepository studentRepository;
    private final ScholarshipRepository scholarshipRepository;

    public MatchingController(
            MatchingService matchingService,
            StudentRepository studentRepository,
            ScholarshipRepository scholarshipRepository) {

        this.matchingService =
                matchingService;

        this.studentRepository =
                studentRepository;

        this.scholarshipRepository =
                scholarshipRepository;
    }

    @GetMapping("/students/{studentId}")
    public List<MatchingResult> getMatchesForStudent(
            @PathVariable Long studentId) {

        Student student =
                studentRepository.findById(studentId)
                        .orElseThrow();

        return matchingService
                .getMatchesForStudent(student);
    }

    @GetMapping("/students/{studentId}/scholarships/{scholarshipId}")
    public MatchingResult getMatch(
            @PathVariable Long studentId,
            @PathVariable Long scholarshipId) {

        Student student =
                studentRepository.findById(studentId)
                        .orElseThrow();

        Scholarship scholarship =
                scholarshipRepository.findById(scholarshipId)
                        .orElseThrow();

        boolean eligible =
                matchingService
                        .getMatchesForStudent(student)
                        .stream()
                        .filter(result ->
                                result.getScholarshipId()
                                        .equals(scholarshipId))
                        .findFirst()
                        .map(MatchingResult::isEligible)
                        .orElse(false);

        int score =
                matchingService
                        .getMatchesForStudent(student)
                        .stream()
                        .filter(result ->
                                result.getScholarshipId()
                                        .equals(scholarshipId))
                        .findFirst()
                        .map(MatchingResult::getScore)
                        .orElse(0);

        String label =
                matchingService
                        .getMatchesForStudent(student)
                        .stream()
                        .filter(result ->
                                result.getScholarshipId()
                                        .equals(scholarshipId))
                        .findFirst()
                        .map(MatchingResult::getLabel)
                        .orElse("Low");

        return new MatchingResult(
                scholarship.getScholarshipId(),
                scholarship.getName(),
                eligible,
                score,
                label);
    }
}

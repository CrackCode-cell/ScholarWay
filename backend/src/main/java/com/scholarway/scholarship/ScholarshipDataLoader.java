package com.scholarway.scholarship;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ScholarshipDataLoader implements CommandLineRunner {

    private final ScholarshipRepository scholarshipRepository;

    public ScholarshipDataLoader(
            ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }

    @Override
    public void run(String... args) {

        ScholarshipRequirements engineeringRequirements =
                new ScholarshipRequirements(
                        3.5,
                        "Computer Engineering",
                        "Washington",
                        true,
                        true,
                        "Engineering"
                );

        ScholarshipRequirements technologyRequirements =
                new ScholarshipRequirements(
                        3.0,
                        "Computer Science",
                        "Washington",
                        false,
                        false,
                        "Technology"
                );

        ScholarshipRequirements stemRequirements =
                new ScholarshipRequirements(
                        3.25,
                        "STEM",
                        "United States",
                        false,
                        true,
                        "STEM"
                );

        Scholarship engineeringScholarship =
                new Scholarship(
                        "Future Engineers Scholarship",
                        "ScholarWay Foundation",
                        "A development scholarship for students pursuing engineering.",
                        new BigDecimal("5000"),
                        LocalDate.of(2027, 5, 1),
                        "https://example.com/apply",
                        "OPEN",
                        ScholarshipType.MERIT_AND_NEED,
                        engineeringRequirements
                );

        Scholarship technologyScholarship =
                new Scholarship(
                        "Technology Scholars Award",
                        "Technology Foundation",
                        "A scholarship for students pursuing technology-related fields.",
                        new BigDecimal("3000"),
                        LocalDate.of(2027, 4, 15),
                        "https://example.com/apply",
                        "OPEN",
                        ScholarshipType.MERIT,
                        technologyRequirements
                );

        Scholarship stemScholarship =
                new Scholarship(
                        "STEM Achievement Scholarship",
                        "STEM Education Fund",
                        "A scholarship supporting students studying STEM fields.",
                        new BigDecimal("2500"),
                        LocalDate.of(2027, 6, 1),
                        "https://example.com/apply",
                        "OPEN",
                        ScholarshipType.MERIT,
                        stemRequirements
                );

        scholarshipRepository.save(engineeringScholarship);
        scholarshipRepository.save(technologyScholarship);
        scholarshipRepository.save(stemScholarship);
    }
}

package com.scholarway.scholarship;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScholarshipRepository
        extends JpaRepository<Scholarship, Long> {

    List<Scholarship> findByNameContainingIgnoreCase(
            String name);

    List<Scholarship> findByStatusIgnoreCase(
            String status);

    List<Scholarship> findByScholarshipType(
            ScholarshipType scholarshipType);

    List<Scholarship> findByNameContainingIgnoreCaseAndStatusIgnoreCase(
            String name,
            String status);

    List<Scholarship> findByNameContainingIgnoreCaseAndScholarshipType(
            String name,
            ScholarshipType scholarshipType);

    List<Scholarship> findByStatusIgnoreCaseAndScholarshipType(
            String status,
            ScholarshipType scholarshipType);

    List<Scholarship> findByNameContainingIgnoreCaseAndStatusIgnoreCaseAndScholarshipType(
            String name,
            String status,
            ScholarshipType scholarshipType);
}

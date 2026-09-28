package com.scholarway.application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScholarshipApplicationRepository
        extends JpaRepository<ScholarshipApplication, Long> {

    List<ScholarshipApplication> findByStudentStudentId(
            Long studentId);

    boolean existsByStudentStudentIdAndScholarshipScholarshipId(
            Long studentId,
            Long scholarshipId);
}

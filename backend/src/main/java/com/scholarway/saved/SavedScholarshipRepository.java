package com.scholarway.saved;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedScholarshipRepository
        extends JpaRepository<SavedScholarship, Long> {

    List<SavedScholarship> findByStudentStudentId(
            Long studentId);

    boolean existsByStudentStudentIdAndScholarshipScholarshipId(
            Long studentId,
            Long scholarshipId);

    void deleteByStudentStudentIdAndScholarshipScholarshipId(
            Long studentId,
            Long scholarshipId);
}

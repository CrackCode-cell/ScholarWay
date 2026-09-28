package com.scholarway.scholarship;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ScholarshipService {

    private final ScholarshipRepository scholarshipRepository;

    public ScholarshipService(
            ScholarshipRepository scholarshipRepository) {

        this.scholarshipRepository =
                scholarshipRepository;
    }

    public List<Scholarship> getAllScholarships() {

        return scholarshipRepository.findAll();
    }

    public Scholarship getScholarshipById(Long id) {

        return scholarshipRepository.findById(id)
                .orElseThrow();
    }

    public List<Scholarship> searchScholarships(
            String name) {

        return scholarshipRepository
                .findByNameContainingIgnoreCase(name);
    }

    public List<Scholarship> getScholarshipsByStatus(
            String status) {

        return scholarshipRepository
                .findByStatusIgnoreCase(status);
    }

    public List<Scholarship> getScholarshipsByType(
            ScholarshipType scholarshipType) {

        return scholarshipRepository
                .findByScholarshipType(scholarshipType);
    }

    public List<Scholarship> filterScholarships(
            String name,
            String status,
            ScholarshipType scholarshipType) {

        if (name != null
                && status != null
                && scholarshipType != null) {

            return scholarshipRepository
                    .findByNameContainingIgnoreCaseAndStatusIgnoreCaseAndScholarshipType(
                            name,
                            status,
                            scholarshipType);
        }

        if (name != null
                && status != null) {

            return scholarshipRepository
                    .findByNameContainingIgnoreCaseAndStatusIgnoreCase(
                            name,
                            status);
        }

        if (name != null
                && scholarshipType != null) {

            return scholarshipRepository
                    .findByNameContainingIgnoreCaseAndScholarshipType(
                            name,
                            scholarshipType);
        }

        if (status != null
                && scholarshipType != null) {

            return scholarshipRepository
                    .findByStatusIgnoreCaseAndScholarshipType(
                            status,
                            scholarshipType);
        }

        if (name != null) {
            return searchScholarships(name);
        }

        if (status != null) {
            return getScholarshipsByStatus(status);
        }

        if (scholarshipType != null) {
            return getScholarshipsByType(scholarshipType);
        }

        return getAllScholarships();
    }
}

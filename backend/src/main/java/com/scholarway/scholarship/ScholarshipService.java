package com.scholarway.scholarship;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ScholarshipService {

    private final ScholarshipRepository scholarshipRepository;

    public ScholarshipService(
            ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }

    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    public Scholarship getScholarshipById(Long id) {
        return scholarshipRepository.findById(id)
                .orElseThrow();
    }
}

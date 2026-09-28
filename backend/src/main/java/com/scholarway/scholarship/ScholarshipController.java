package com.scholarway.scholarship;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/scholarships")
public class ScholarshipController {

    private final ScholarshipService scholarshipService;

    public ScholarshipController(
            ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }

    @GetMapping
    public List<Scholarship> getAllScholarships() {
        return scholarshipService.getAllScholarships();
    }

    @GetMapping("/{id}")
    public Scholarship getScholarshipById(
            @PathVariable Long id) {
        return scholarshipService.getScholarshipById(id);
    }
}

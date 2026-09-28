package com.scholarway.scholarship;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/scholarships")
public class ScholarshipController {

    private final ScholarshipService scholarshipService;

    public ScholarshipController(
            ScholarshipService scholarshipService) {

        this.scholarshipService =
                scholarshipService;
    }

    @GetMapping
    public List<Scholarship> getAllScholarships() {

        return scholarshipService
                .getAllScholarships();
    }

    @GetMapping("/{id}")
    public Scholarship getScholarshipById(
            @PathVariable Long id) {

        return scholarshipService
                .getScholarshipById(id);
    }

    @GetMapping("/search")
    public List<Scholarship> searchScholarships(
            @RequestParam String name) {

        return scholarshipService
                .searchScholarships(name);
    }

    @GetMapping("/status")
    public List<Scholarship> getScholarshipsByStatus(
            @RequestParam String status) {

        return scholarshipService
                .getScholarshipsByStatus(status);
    }

    @GetMapping("/type")
    public List<Scholarship> getScholarshipsByType(
            @RequestParam ScholarshipType scholarshipType) {

        return scholarshipService
                .getScholarshipsByType(scholarshipType);
    }

    @GetMapping("/filter")
    public List<Scholarship> filterScholarships(
            @RequestParam(required = false)
                    String name,
            @RequestParam(required = false)
                    String status,
            @RequestParam(required = false)
                    ScholarshipType scholarshipType) {

        return scholarshipService.filterScholarships(
                name,
                status,
                scholarshipType);
    }
}

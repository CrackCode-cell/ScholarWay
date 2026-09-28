package com.scholarway.saved;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/saved-scholarships")
public class SavedScholarshipController {

    private final SavedScholarshipService savedScholarshipService;

    public SavedScholarshipController(
            SavedScholarshipService savedScholarshipService) {

        this.savedScholarshipService =
                savedScholarshipService;
    }

    @PostMapping("/{studentId}/{scholarshipId}")
    public SavedScholarship saveScholarship(
            @PathVariable Long studentId,
            @PathVariable Long scholarshipId) {

        return savedScholarshipService
                .saveScholarship(
                        studentId,
                        scholarshipId);
    }

    @GetMapping("/{studentId}")
    public List<SavedScholarship> getSavedScholarships(
            @PathVariable Long studentId) {

        return savedScholarshipService
                .getSavedScholarships(studentId);
    }

    @GetMapping("/{studentId}/{scholarshipId}")
    public boolean isScholarshipSaved(
            @PathVariable Long studentId,
            @PathVariable Long scholarshipId) {

        return savedScholarshipService
                .isScholarshipSaved(
                        studentId,
                        scholarshipId);
    }

    @DeleteMapping("/{studentId}/{scholarshipId}")
    public void removeSavedScholarship(
            @PathVariable Long studentId,
            @PathVariable Long scholarshipId) {

        savedScholarshipService
                .removeSavedScholarship(
                        studentId,
                        scholarshipId);
    }
}

package com.scholarway.application;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/applications")
public class ScholarshipApplicationController {

    private final ScholarshipApplicationService applicationService;

    public ScholarshipApplicationController(
            ScholarshipApplicationService applicationService) {

        this.applicationService =
                applicationService;
    }

    @PostMapping("/{studentId}/{scholarshipId}")
    public ScholarshipApplication createApplication(
            @PathVariable Long studentId,
            @PathVariable Long scholarshipId,
            @RequestBody ApplicationRequest request) {

        return applicationService.createApplication(
                studentId,
                scholarshipId,
                request.getStatus(),
                request.getNotes());
    }

    @GetMapping("/student/{studentId}")
    public List<ScholarshipApplication> getApplications(
            @PathVariable Long studentId) {

        return applicationService
                .getApplications(studentId);
    }

    @GetMapping("/{applicationId}")
    public ScholarshipApplication getApplicationById(
            @PathVariable Long applicationId) {

        return applicationService
                .getApplicationById(applicationId);
    }

    @PutMapping("/{applicationId}/status")
    public ScholarshipApplication updateStatus(
            @PathVariable Long applicationId,
            @RequestBody StatusRequest request) {

        return applicationService.updateStatus(
                applicationId,
                request.getStatus());
    }

    @PutMapping("/{applicationId}/notes")
    public ScholarshipApplication updateNotes(
            @PathVariable Long applicationId,
            @RequestBody NotesRequest request) {

        return applicationService.updateNotes(
                applicationId,
                request.getNotes());
    }

    @DeleteMapping("/{applicationId}")
    public void deleteApplication(
            @PathVariable Long applicationId) {

        applicationService
                .deleteApplication(applicationId);
    }

    public static class ApplicationRequest {

        private ApplicationStatus status;
        private String notes;

        public ApplicationRequest() {
        }

        public ApplicationStatus getStatus() {
            return status;
        }

        public void setStatus(
                ApplicationStatus status) {

            this.status = status;
        }

        public String getNotes() {
            return notes;
        }

        public void setNotes(String notes) {
            this.notes = notes;
        }
    }

    public static class StatusRequest {

        private ApplicationStatus status;

        public StatusRequest() {
        }

        public ApplicationStatus getStatus() {
            return status;
        }

        public void setStatus(
                ApplicationStatus status) {

            this.status = status;
        }
    }

    public static class NotesRequest {

        private String notes;

        public NotesRequest() {
        }

        public String getNotes() {
            return notes;
        }

        public void setNotes(String notes) {
            this.notes = notes;
        }
    }
}

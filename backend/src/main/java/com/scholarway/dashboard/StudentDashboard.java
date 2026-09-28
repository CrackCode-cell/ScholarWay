package com.scholarway.dashboard;

import java.util.List;

import com.scholarway.application.ScholarshipApplication;
import com.scholarway.matching.MatchingResult;
import com.scholarway.saved.SavedScholarship;
import com.scholarway.student.Student;

public class StudentDashboard {

    private Student student;

    private List<SavedScholarship> savedScholarships;

    private List<ScholarshipApplication> applications;

    private List<MatchingResult> matches;

    public StudentDashboard() {
    }

    public StudentDashboard(
            Student student,
            List<SavedScholarship> savedScholarships,
            List<ScholarshipApplication> applications,
            List<MatchingResult> matches) {

        this.student = student;
        this.savedScholarships = savedScholarships;
        this.applications = applications;
        this.matches = matches;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public List<SavedScholarship> getSavedScholarships() {
        return savedScholarships;
    }

    public void setSavedScholarships(
            List<SavedScholarship> savedScholarships) {

        this.savedScholarships = savedScholarships;
    }

    public List<ScholarshipApplication> getApplications() {
        return applications;
    }

    public void setApplications(
            List<ScholarshipApplication> applications) {

        this.applications = applications;
    }

    public List<MatchingResult> getMatches() {
        return matches;
    }

    public void setMatches(
            List<MatchingResult> matches) {

        this.matches = matches;
    }
}

package com.scholarway.application;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.student.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ScholarshipApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "scholarship_id")
    private Scholarship scholarship;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;

    private String notes;

    public ScholarshipApplication() {
    }

    public ScholarshipApplication(
            Student student,
            Scholarship scholarship,
            ApplicationStatus status,
            String notes) {

        this.student = student;
        this.scholarship = scholarship;
        this.status = status;
        this.notes = notes;
    }

    public Long getApplicationId() {
        return applicationId;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Scholarship getScholarship() {
        return scholarship;
    }

    public void setScholarship(
            Scholarship scholarship) {

        this.scholarship = scholarship;
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

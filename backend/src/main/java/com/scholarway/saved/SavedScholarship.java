package com.scholarway.saved;

import com.scholarway.scholarship.Scholarship;
import com.scholarway.student.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class SavedScholarship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long savedScholarshipId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "scholarship_id")
    private Scholarship scholarship;

    public SavedScholarship() {
    }

    public SavedScholarship(
            Student student,
            Scholarship scholarship) {

        this.student = student;
        this.scholarship = scholarship;
    }

    public Long getSavedScholarshipId() {
        return savedScholarshipId;
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
}

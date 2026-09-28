package com.scholarway.student;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;

    private String name;
    private Double gpa;
    private String major;
    private String interests;
    private String location;
    private Boolean financialNeed;
    private Boolean fafsaCompleted;
    private String activities;

    public Student() {
    }

    public Student(
            String name,
            Double gpa,
            String major,
            String interests,
            String location,
            Boolean financialNeed,
            Boolean fafsaCompleted,
            String activities) {

        this.name = name;
        this.gpa = gpa;
        this.major = major;
        this.interests = interests;
        this.location = location;
        this.financialNeed = financialNeed;
        this.fafsaCompleted = fafsaCompleted;
        this.activities = activities;
    }

    public Long getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getGpa() {
        return gpa;
    }

    public void setGpa(Double gpa) {
        this.gpa = gpa;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getFinancialNeed() {
        return financialNeed;
    }

    public void setFinancialNeed(Boolean financialNeed) {
        this.financialNeed = financialNeed;
    }

    public Boolean getFafsaCompleted() {
        return fafsaCompleted;
    }

    public void setFafsaCompleted(Boolean fafsaCompleted) {
        this.fafsaCompleted = fafsaCompleted;
    }

    public String getActivities() {
        return activities;
    }

    public void setActivities(String activities) {
        this.activities = activities;
    }
}

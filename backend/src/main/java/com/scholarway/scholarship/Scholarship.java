package com.scholarway.scholarship;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Scholarship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scholarshipId;

    private String name;
    private String provider;
    private String description;
    private BigDecimal awardAmount;
    private LocalDate deadline;
    private String applicationUrl;
    private String status;
    private ScholarshipType scholarshipType;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "requirements_id")
    private ScholarshipRequirements requirements;

    public Scholarship() {
    }

    public Scholarship(
            String name,
            String provider,
            String description,
            BigDecimal awardAmount,
            LocalDate deadline,
            String applicationUrl,
            String status,
            ScholarshipType scholarshipType,
            ScholarshipRequirements requirements) {

        this.name = name;
        this.provider = provider;
        this.description = description;
        this.awardAmount = awardAmount;
        this.deadline = deadline;
        this.applicationUrl = applicationUrl;
        this.status = status;
        this.scholarshipType = scholarshipType;
        this.requirements = requirements;
    }

    public Long getScholarshipId() {
        return scholarshipId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getAwardAmount() {
        return awardAmount;
    }

    public void setAwardAmount(BigDecimal awardAmount) {
        this.awardAmount = awardAmount;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public String getApplicationUrl() {
        return applicationUrl;
    }

    public void setApplicationUrl(String applicationUrl) {
        this.applicationUrl = applicationUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ScholarshipType getScholarshipType() {
        return scholarshipType;
    }

    public void setScholarshipType(ScholarshipType scholarshipType) {
        this.scholarshipType = scholarshipType;
    }

    public ScholarshipRequirements getRequirements() {
        return requirements;
    }

    public void setRequirements(ScholarshipRequirements requirements) {
        this.requirements = requirements;
    }
}

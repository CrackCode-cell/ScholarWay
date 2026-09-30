package com.scholarway.scholarship.dto;

import com.scholarway.scholarship.ScholarshipType;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ScholarshipResponse {

    private Long scholarshipId;
    private String name;
    private String provider;
    private String description;
    private BigDecimal awardAmount;
    private LocalDate deadline;
    private String applicationUrl;
    private String status;
    private ScholarshipType scholarshipType;

    public ScholarshipResponse() {
    }

    public ScholarshipResponse(
            Long scholarshipId,
            String name,
            String provider,
            String description,
            BigDecimal awardAmount,
            LocalDate deadline,
            String applicationUrl,
            String status,
            ScholarshipType scholarshipType
    ) {
        this.scholarshipId = scholarshipId;
        this.name = name;
        this.provider = provider;
        this.description = description;
        this.awardAmount = awardAmount;
        this.deadline = deadline;
        this.applicationUrl = applicationUrl;
        this.status = status;
        this.scholarshipType = scholarshipType;
    }

    public Long getScholarshipId() {
        return scholarshipId;
    }

    public String getName() {
        return name;
    }

    public String getProvider() {
        return provider;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getAwardAmount() {
        return awardAmount;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public String getApplicationUrl() {
        return applicationUrl;
    }

    public String getStatus() {
        return status;
    }

    public ScholarshipType getScholarshipType() {
        return scholarshipType;
    }
}

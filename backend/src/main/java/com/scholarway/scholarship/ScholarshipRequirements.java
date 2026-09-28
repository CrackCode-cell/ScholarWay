package com.scholarway.scholarship;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ScholarshipRequirements {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requirementId;

    private Double minimumGpa;

    private String major;

    private String location;

    private Boolean financialNeedRequired;

    private Boolean fafsaRequired;

    private String requiredActivity;

    public ScholarshipRequirements() {
    }

    public ScholarshipRequirements(
            Double minimumGpa,
            String major,
            String location,
            Boolean financialNeedRequired,
            Boolean fafsaRequired,
            String requiredActivity) {

        this.minimumGpa = minimumGpa;
        this.major = major;
        this.location = location;
        this.financialNeedRequired = financialNeedRequired;
        this.fafsaRequired = fafsaRequired;
        this.requiredActivity = requiredActivity;
    }

    public Long getRequirementId() {
        return requirementId;
    }

    public Double getMinimumGpa() {
        return minimumGpa;
    }

    public void setMinimumGpa(Double minimumGpa) {
        this.minimumGpa = minimumGpa;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getFinancialNeedRequired() {
        return financialNeedRequired;
    }

    public void setFinancialNeedRequired(
            Boolean financialNeedRequired) {
        this.financialNeedRequired = financialNeedRequired;
    }

    public Boolean getFafsaRequired() {
        return fafsaRequired;
    }

    public void setFafsaRequired(Boolean fafsaRequired) {
        this.fafsaRequired = fafsaRequired;
    }

    public String getRequiredActivity() {
        return requiredActivity;
    }

    public void setRequiredActivity(
            String requiredActivity) {
        this.requiredActivity = requiredActivity;
    }
}

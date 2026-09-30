package com.scholarway.matching;

public class MatchingResult {

    private Long scholarshipId;
    private String scholarshipName;
    private boolean eligible;
    private int score;
    private String label;

    private boolean gpaMatch;
    private boolean majorMatch;
    private boolean locationMatch;
    private boolean financialNeedMatch;
    private boolean fafsaMatch;
    private boolean activitiesMatch;

    public MatchingResult(
            Long scholarshipId,
            String scholarshipName,
            boolean eligible,
            int score,
            String label,
            boolean gpaMatch,
            boolean majorMatch,
            boolean locationMatch,
            boolean financialNeedMatch,
            boolean fafsaMatch,
            boolean activitiesMatch
    ) {
        this.scholarshipId = scholarshipId;
        this.scholarshipName = scholarshipName;
        this.eligible = eligible;
        this.score = score;
        this.label = label;
        this.gpaMatch = gpaMatch;
        this.majorMatch = majorMatch;
        this.locationMatch = locationMatch;
        this.financialNeedMatch = financialNeedMatch;
        this.fafsaMatch = fafsaMatch;
        this.activitiesMatch = activitiesMatch;
    }

    public Long getScholarshipId() {
        return scholarshipId;
    }

    public String getScholarshipName() {
        return scholarshipName;
    }

    public boolean isEligible() {
        return eligible;
    }

    public int getScore() {
        return score;
    }

    public String getLabel() {
        return label;
    }

    public boolean isGpaMatch() {
        return gpaMatch;
    }

    public boolean isMajorMatch() {
        return majorMatch;
    }

    public boolean isLocationMatch() {
        return locationMatch;
    }

    public boolean isFinancialNeedMatch() {
        return financialNeedMatch;
    }

    public boolean isFafsaMatch() {
        return fafsaMatch;
    }

    public boolean isActivitiesMatch() {
        return activitiesMatch;
    }
}

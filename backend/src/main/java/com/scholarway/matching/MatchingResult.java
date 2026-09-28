package com.scholarway.matching;

public class MatchingResult {

    private Long scholarshipId;
    private String scholarshipName;
    private boolean eligible;
    private int score;
    private String label;

    public MatchingResult() {
    }

    public MatchingResult(
            Long scholarshipId,
            String scholarshipName,
            boolean eligible,
            int score,
            String label) {

        this.scholarshipId = scholarshipId;
        this.scholarshipName = scholarshipName;
        this.eligible = eligible;
        this.score = score;
        this.label = label;
    }

    public Long getScholarshipId() {
        return scholarshipId;
    }

    public void setScholarshipId(
            Long scholarshipId) {

        this.scholarshipId = scholarshipId;
    }

    public String getScholarshipName() {
        return scholarshipName;
    }

    public void setScholarshipName(
            String scholarshipName) {

        this.scholarshipName = scholarshipName;
    }

    public boolean isEligible() {
        return eligible;
    }

    public void setEligible(boolean eligible) {
        this.eligible = eligible;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}

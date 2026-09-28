# ScholarWay Matching System

ScholarWay separates scholarship eligibility from personalized matching.

## Eligibility

Eligibility asks:

> Can the student potentially satisfy the scholarship's listed requirements?

The current eligibility system checks:

- GPA
- Major
- Location
- Financial need
- FAFSA completion
- Required activity

Eligibility is based on the requirements stored with each scholarship.

ScholarWay does not guarantee that a student will receive a scholarship.

## Matching

Matching asks:

> How strongly does the student's profile align with the scholarship?

The current prototype uses a 100-point deterministic score.

| Factor | Weight |
|---|---:|
| GPA | 20 |
| Major | 20 |
| Location | 15 |
| Financial need | 20 |
| FAFSA | 10 |
| Activities | 15 |
| Total | 100 |

## Match labels

- 95–100: Excellent
- 80–94: Strong
- 65–79: Good
- Below 65: Low

These labels are prototype categories used by ScholarWay's current matching system. They are not probabilities of receiving an award.

## Backend flow

Student
→ Matching Controller
→ Matching Service
→ Eligibility Service
→ Scholarship Requirements
→ Matching Result

The matching result contains:

- Scholarship ID
- Scholarship name
- Eligibility result
- Match score
- Match label

## Future improvements

The matching system can later become more sophisticated by supporting:

- More flexible requirement matching
- Additional student profile factors
- Better handling of ranges and optional requirements
- More detailed explanations for match results
- Improved personalization
- Real scholarship data

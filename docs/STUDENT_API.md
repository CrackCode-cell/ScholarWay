# ScholarWay Student API

Base path:

`/api/students`

## Create a student

`POST /api/students`

Creates a new student profile.

The profile can contain:

- Name
- GPA
- Major
- Interests
- Location
- Financial need
- FAFSA completion
- Activities

## Get a student

`GET /api/students/{studentId}`

Returns a student profile by ID.

## Backend flow

React Native
→ Student API Service
→ Student Controller
→ Student Service
→ Student Repository
→ PostgreSQL

## Student profile purpose

The student profile provides the information ScholarWay uses for personalized scholarship matching.

The profile can later be expanded with additional academic, financial, and application-related information.

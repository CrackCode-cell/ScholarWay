# ScholarWay Scholarship API

Base path:

`/api/scholarships`

## Get all scholarships

`GET /api/scholarships`

Returns all scholarships stored in the database.

## Get one scholarship

`GET /api/scholarships/{id}`

Returns a scholarship by its ID.

## Search scholarships

`GET /api/scholarships/search?name=technology`

Searches scholarship names without requiring an exact case match.

## Filter by status

`GET /api/scholarships/status?status=OPEN`

Returns scholarships with the requested status.

## Filter by type

`GET /api/scholarships/type?scholarshipType=MERIT`

Supported scholarship types include:

- MERIT
- NEED_BASED
- MERIT_AND_NEED

## Combined filtering

`GET /api/scholarships/filter`

Optional parameters:

- `name`
- `status`
- `scholarshipType`

The backend applies whichever filters are provided.

## Architecture

React Native
→ Scholarship Service
→ Scholarship Controller
→ Scholarship Service
→ Scholarship Repository
→ PostgreSQL

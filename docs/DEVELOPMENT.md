# ScholarWay Development Guide

This document describes the current development structure and workflow for ScholarWay.

## Project Structure

- `backend/` — Java Spring Boot backend and REST API
- `frontend-mobile/` — React Native and Expo frontend
- `docs/` — project documentation

## Backend Systems

- Scholarship management
- Student profiles
- Eligibility and matching
- Saved scholarships
- Application tracking
- Student dashboard

## Development Flow

Frontend → REST API → Controller → Service → Repository → JPA/Hibernate → PostgreSQL

## Development Approach

ScholarWay is being developed incrementally, with each major system implemented, reviewed, documented, and eventually tested before moving toward deployment.

## Current Focus

The current focus is connecting the core scholarship workflow across the backend, database, and frontend while continuing to improve documentation and testing.

# Project Proposal — Florida Springs App

## 1. Project Overview
A web app that helps users discover Florida’s natural springs.  
Features include a searchable map, spring details (location, county, activities, amenities, fees), and the ability to mark favorites or leave reviews (stretch).

## 2. Tech Stack
- **Frontend:** React (Vite) for fast UI development.
- **Styling:** Tailwind CSS for layout and typography.
- **Maps:** Leaflet + React-Leaflet for interactive maps and markers.
- **Backend:** Node.js with Express for API endpoints.
- **Database:** MongoDB with Mongoose for models (Springs, Users, Reviews).
- **Auth (stretch):** JWT or Auth0 for user login/favorites.
- **Deployment:** Netlify (frontend), Render/Railway (API).

## 3. Design Approach
- Clean and accessible layout with Tailwind CSS.
- Wireframes to illustrate browsing and spring details views.
- Style tile with color palette and typography inspired by Florida’s natural springs.

## 4. Initial Models
- **Spring**
  - name, county, description, activities, amenities, fees, images, location.
- **User** (stretch)
  - email, passwordHash, favorites.
- **Review** (stretch)
  - springId, userId, rating, comment.

## 5. Code Requirements
- CRUD for Springs (seed data first).
- API endpoints for list/filter, detail, and near-me queries.
- Clear folder structure (client/, server/, db/).
- Validation with Mongoose + middleware.
- ESLint + Prettier, JSDoc-style comments.

## 6. Milestone Scope
- **Week 1:** Proposal + Tech Stack + Repo setup.
- **Week 2:** Basic React views, sample API integration.
- **Week 3:** Map with markers and filters.
- **Week 4:** Stretch goals (reviews/favorites, auth).

## 7. Risks
- Geospatial queries might be tricky (backup: bbox filters).
- Map tile rate limits (backup: alternate providers).
- Auth setup might be time consuming (backup: read-only MVP).

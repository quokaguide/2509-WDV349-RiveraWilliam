
# Florida Springs App — Tech Stack & Initial Requirements

## 1) Project Overview
A web app to discover Florida’s natural springs. Users can browse a list/map of springs, view details (location, county, activities, amenities, fees), and (stretch) add reviews or favorites.

## 2) Tech Stack (Why these tools)
- **Frontend:** React (Vite) — fast dev, component UI.
- **State / Data fetching:** TanStack Query (React Query) — caches API data; simpler than Redux for server data.
- **Styling:** Tailwind CSS + small custom CSS — quick, consistent UI; can swap for plain CSS if preferred.
- **Maps:** Leaflet + React-Leaflet with OpenStreetMap tiles — free mapping, markers, popups.
- **Backend:** Node.js + Express — simple REST API for springs, reviews, auth.
- **Database:** MongoDB + Mongoose — easy docs, **geospatial** (`2dsphere`) queries for “near me”.
- **Auth (stretch):** Auth0 (hosted) **or** JWT (custom) — protects write actions (reviews/favorites).
- **Testing:** Jest + React Testing Library (frontend), Jest + Supertest (API).
- **Quality:** ESLint + Prettier, Husky pre-commit.
- **Deployment (later):** Netlify/Vercel (frontend), Render/Railway (API), MongoDB Atlas (DB).

## 3) Design Plan
- Use Tailwind utility classes for layout/spacing/typography.
- Clean map/list split view; mobile-first with sticky action bar.
- Consistent components: Card, Badge (amenities), Rating (stretch).
- Follow accessible patterns (semantic HTML, labels, keyboard nav).

## 4) Initial Data Models (Mongoose)
**Spring**
```js
{
  name: String,
  county: String,
  description: String,
  activities: [String],      // e.g., "snorkeling", "kayaking"
  amenities: [String],       // e.g., "restrooms", "picnic"
  fees: { type: Number, min: 0 },
  websiteUrl: String,
  images: [String],
  location: { type: { type: String, enum: ['Point'], default: 'Point' },
              coordinates: [Number] } // [lng, lat], 2dsphere index
}
eof

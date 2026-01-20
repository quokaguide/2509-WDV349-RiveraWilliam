proposal-scope-update
## Week of 2025-09-22 — Research Notes

### 1) API basics (for Springs Explorer)
- Use simple nouns: `/api/springs`, `/api/favorites`
- Main calls:
  - `GET /api/springs?near=lat,lng&maxDistance=50&clarity=clear`
  - `GET /api/springs/:id`
  - `POST /api/favorites` { springId }
  - `DELETE /api/favorites/:springId`
- Return the same shape every time: `{ data: ..., error: null }` or `{ data: null, error: { code, message } }`
- If something’s wrong, send a 400 with a clear message.
- (Nice-to-have) version later: `/api/v1/...`

**Action:** keep `GET /api/springs` and add optional filters; store favorites in localStorage for MVP.

---

### 2) Docs first (DDD)
Before coding an endpoint, write:
- What it does (1 sentence)
- Example request (URL/params or body)
- Example response (small JSON)

**Example response — `GET /api/springs`**
```json
{
  "data": [
    {
      "id": "wekiva",
      "name": "Wekiwa Springs",
      "location": { "lat": 28.712, "lng": -81.463 },
      "distanceKm": 22.4,
      "clarity": "clear",
      "amenities": ["kayaking", "parking"]
    }
  ],
  "error": null
}

# Research – R2

## Audience
- Primary users:
- Needs:

## Competitors
| Competitor | Strengths | Gaps | Notes |
|---|---|---|---|
| A |  |  |  |
| B |  |  |  |

## Insights → MVP Requirements
- Insight: … → Requirement: …
- Insight: … → Requirement: …

## References
- Links…
 main

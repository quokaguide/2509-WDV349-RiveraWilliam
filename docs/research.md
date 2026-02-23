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

## References

1. OWASP Foundation. “OWASP Top 10 Web Application Security Risks.” OWASP, 2023. https://owasp.org/www-project-top-ten/. Accessed Jan 27, 2026.

2. Mozilla Developer Network. “HTTP Security Headers.” MDN Web Docs, Mozilla, 2024. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers. Accessed Jan 27, 2026.

3. Auth0. “JSON Web Token (JWT) Introduction.” Auth0 Documentation, 2024. https://auth0.com/docs/secure/tokens/json-web-tokens. Accessed Jan 27, 2026.

4. Google Developers. “Web Security Best Practices.” Google, 2024. https://developers.google.com/web/fundamentals/security. Accessed Jan 27, 2026.


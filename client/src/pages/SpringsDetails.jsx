import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { getSpringById } from "../api/springApi.js";

const STORAGE_KEY = "savedSprings";

function getSavedIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function setSavedIds(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export default function SpringsDetails() {
  const { id } = useParams();
  const spring = getSpringById(id);

  const [savedIds, setSavedIdsState] = useState(getSavedIds());
  const isSaved = savedIds.includes(String(id));

  const mapsUrl = useMemo(() => {
    if (!spring) return "#";
    const q = encodeURIComponent(`${spring.name} ${spring.location}`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, [spring]);

  function toggleSave() {
    const sid = String(id);
    const next = isSaved ? savedIds.filter((x) => x !== sid) : [...savedIds, sid];
    setSavedIds(next);
    setSavedIdsState(next);
  }

  if (!spring) {
    return (
      <div className="page">
        <div className="card" style={{ padding: 18 }}>
          <h1 style={{ marginTop: 0 }}>Spring not found</h1>
          <p style={{ color: "var(--muted)" }}>
            That spring doesn’t exist in your current dataset.
          </p>
          <Link className="btn btn-solid" to="/explore">Back to Explore</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="details-hero">
        <img src={spring.image} alt={spring.name} />
        <div className="details-content">
          <div className="spring-meta" style={{ marginBottom: 8 }}>
            <span className="pill">{spring.clarity}</span>
            <span className="dot">•</span>
            <span>{spring.distanceKm} km</span>
            {spring.temperature ? (
              <>
                <span className="dot">•</span>
                <span>{spring.temperature}</span>
              </>
            ) : null}
          </div>

          <h1 className="details-title">{spring.name}</h1>
          <p className="details-kicker">{spring.location}</p>

          <div className="spring-tags" style={{ marginBottom: 10 }}>
            {(spring.amenities ?? []).map((a) => (
              <span key={a} className="tag">{a}</span>
            ))}
          </div>

          <div className="spring-actions">
            <Link className="btn btn-ghost" to="/explore">Back</Link>
            <button className="btn btn-solid" onClick={toggleSave}>
              {isSaved ? "Saved ✓" : "Save"}
            </button>
            <a className="btn btn-ghost" href={mapsUrl} target="_blank" rel="noreferrer">
              Open in Maps
            </a>
          </div>

          <div className="details-grid">
            <div className="details-box">
              <h3>Description</h3>
              <p>{spring.description}</p>
            </div>

            <div className="details-box">
              <h3>Quick facts</h3>
              <p><strong>Clarity:</strong> {spring.clarity}</p>
              <p><strong>Distance:</strong> {spring.distanceKm} km</p>
              {spring.temperature ? <p><strong>Temp:</strong> {spring.temperature}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

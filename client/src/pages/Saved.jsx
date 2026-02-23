import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getSprings } from "../api/springApi.js";

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

export default function Saved() {
  const allSprings = useMemo(() => getSprings(), []);
  const [savedIds, setSavedIdsState] = useState(getSavedIds());

  const savedSprings = useMemo(() => {
    return allSprings.filter((s) => savedIds.includes(s.id));
  }, [allSprings, savedIds]);

  function remove(id) {
    const next = savedIds.filter((x) => x !== id);
    setSavedIds(next);
    setSavedIdsState(next);
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Saved Springs</h1>
          <p className="page-subtitle">
            {savedSprings.length === 0 ? "No saved springs yet." : `${savedSprings.length} saved`}
          </p>
        </div>

        <Link className="btn btn-ghost" to="/explore">Explore</Link>
      </header>

      {savedSprings.length === 0 ? (
        <div className="card" style={{ padding: 18 }}>
          <p style={{ marginTop: 0, color: "var(--muted)" }}>
            Save springs from the Explore page and they’ll show up here.
          </p>
          <Link className="btn btn-solid" to="/explore">Find springs</Link>
        </div>
      ) : (
        <div className="spring-grid">
          {savedSprings.map((s) => (
            <article key={s.id} className="spring-card">
              <div className="spring-imageWrap">
                <img className="spring-image" src={s.image} alt={s.name} loading="lazy" />
              </div>

              <div className="spring-body">
                <h2 className="spring-title">{s.name}</h2>

                <div className="spring-meta">
                  <span className="pill">{s.clarity}</span>
                  <span className="dot">•</span>
                  <span>{s.distanceKm} km</span>
                  {s.temperature ? (
                    <>
                      <span className="dot">•</span>
                      <span>{s.temperature}</span>
                    </>
                  ) : null}
                </div>

                <div className="spring-actions">
                  <Link className="btn btn-ghost" to={`/springs/${s.id}`}>Details</Link>
                  <button className="btn btn-solid" onClick={() => remove(s.id)}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

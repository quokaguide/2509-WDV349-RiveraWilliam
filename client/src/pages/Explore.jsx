import { useEffect, useMemo, useState } from "react";
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

export default function Explore() {
  const [springs, setSprings] = useState([]);
  const [savedIds, setSavedIdsState] = useState(getSavedIds());

  const [query, setQuery] = useState("");
  const [clarity, setClarity] = useState("all");
  const [amenity, setAmenity] = useState("all");
  const [sort, setSort] = useState("distance");

  useEffect(() => {
    setSprings(getSprings());
  }, []);

  const amenityOptions = useMemo(() => {
    const set = new Set();
    springs.forEach((s) => s.amenities.forEach((a) => set.add(a)));
    return ["all", ...Array.from(set).sort()];
  }, [springs]);

  const visibleSprings = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = springs.filter((s) => {
      const hay = [
        s.name,
        s.location,
        s.clarity,
        ...(s.tags ?? []),
        ...(s.amenities ?? []),
      ]
        .join(" ")
        .toLowerCase();

      if (q && !hay.includes(q)) return false;
      if (clarity !== "all" && s.clarity !== clarity) return false;
      if (amenity !== "all" && !s.amenities.includes(amenity)) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "clarity") return a.clarity.localeCompare(b.clarity);
      return (a.distanceKm ?? 0) - (b.distanceKm ?? 0);
    });

    return list;
  }, [springs, query, clarity, amenity, sort]);

  function toggleSave(id) {
    const next = savedIds.includes(id)
      ? savedIds.filter((x) => x !== id)
      : [...savedIds, id];

    setSavedIds(next);
    setSavedIdsState(next);
  }

  const resultsLabel =
    visibleSprings.length === springs.length && !query && clarity === "all" && amenity === "all"
      ? `${springs.length} springs`
      : `${visibleSprings.length} of ${springs.length} springs`;

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Explore Springs</h1>
          <p className="page-subtitle">{resultsLabel}</p>
        </div>

        <Link className="btn btn-ghost" to="/saved">
          Saved ({savedIds.length})
        </Link>
      </header>

      <div className="toolbar" role="region" aria-label="Search and filters">
        <label className="visually-hidden" htmlFor="search">Search</label>
        <input
          id="search"
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, location, amenity…"
        />

        <label className="visually-hidden" htmlFor="clarity">Clarity</label>
        <select
          id="clarity"
          className="select"
          value={clarity}
          onChange={(e) => setClarity(e.target.value)}
        >
          <option value="all">All clarity</option>
          <option value="crystal">Crystal</option>
          <option value="clear">Clear</option>
        </select>

        <label className="visually-hidden" htmlFor="amenity">Amenity</label>
        <select
          id="amenity"
          className="select"
          value={amenity}
          onChange={(e) => setAmenity(e.target.value)}
        >
          {amenityOptions.map((a) => (
            <option key={a} value={a}>
              {a === "all" ? "All amenities" : a}
            </option>
          ))}
        </select>

        <label className="visually-hidden" htmlFor="sort">Sort</label>
        <select
          id="sort"
          className="select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="distance">Sort: distance</option>
          <option value="name">Sort: name</option>
          <option value="clarity">Sort: clarity</option>
        </select>
      </div>

      <div className="spring-grid">
        {visibleSprings.map((s) => (
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

              <div className="spring-tags" aria-label="Amenities">
                {(s.amenities ?? []).slice(0, 4).map((a) => (
                  <span key={a} className="tag">{a}</span>
                ))}
                {(s.amenities ?? []).length > 4 ? (
                  <span className="tag">+{(s.amenities ?? []).length - 4}</span>
                ) : null}
              </div>

              <div className="spring-actions">
                <Link className="btn btn-ghost" to={`/springs/${s.id}`}>Details</Link>

                <button className="btn btn-solid" onClick={() => toggleSave(s.id)}>
                  {savedIds.includes(s.id) ? "Saved ✓" : "Save"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

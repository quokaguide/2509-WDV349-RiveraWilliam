import { Link } from "react-router-dom";
import homeBg from "../assets/home-bg.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero" aria-label="Springs Explorer hero">
        <img className="home-hero-bg" src={homeBg} alt="Florida spring water" />
        <div className="home-hero-content">
          <h1 className="home-title">Springs Explorer</h1>
          <p className="home-subtitle">
            Discover Florida’s most beautiful natural springs, filter by amenities, and save your favorites for later.
          </p>

          <div className="home-actions">
            <Link className="btn btn-solid" to="/explore">Start Exploring</Link>
            <Link className="btn btn-ghost" to="/saved">View Saved</Link>
          </div>

          <div className="home-badges" aria-label="Highlights">
            <span className="badge">Search</span>
            <span className="badge">Filters</span>
            <span className="badge">Favorites</span>
            <span className="badge">Dark mode</span>
          </div>
        </div>
      </section>
    </div>
  );
}

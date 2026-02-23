import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="card" style={{ padding: 18, textAlign: "center" }}>
        <h1 style={{ marginTop: 0 }}>404</h1>
        <p style={{ color: "var(--muted)" }}>That page doesn’t exist.</p>
        <Link className="btn btn-solid" to="/">Go Home</Link>
      </div>
    </div>
  );
}

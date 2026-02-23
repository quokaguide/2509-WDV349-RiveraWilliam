import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const THEME_KEY = "theme";

function getInitialTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function BottomNav() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Home
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Explore
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
      >
        Saved
      </NavLink>

      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

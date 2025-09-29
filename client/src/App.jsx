import { useState } from "react";
import "./App.css";

import SpringCard from "./components/SpringCard.jsx";
import BottomNav from "./components/BottomNav.jsx";
import FilterModal from "./components/FilterModal.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ padding: 16, paddingBottom: 56 }}>
      <h1>Springs Explorer (preview)</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setOpen(true)}>Filter</button>
        {open && <FilterModal onClose={() => setOpen(false)} />}
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        <SpringCard
          name="Wekiwa Springs"
          clarity="clear"
          distanceKm={22.4}
          amenities={["kayaking", "parking"]}
        />
        <SpringCard
          name="Blue Springs"
          clarity="crystal"
          distanceKm={48.0}
          amenities={["camping"]}
        />
      </div>

      <BottomNav />
    </main>
  );
}

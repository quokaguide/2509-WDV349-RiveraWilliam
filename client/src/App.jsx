import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import SpringsDetails from "./pages/SpringsDetails";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

import "./App.css";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app">
      <main className={`app-main ${isHome ? "app-main--full" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/springs/:id" element={<SpringsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}

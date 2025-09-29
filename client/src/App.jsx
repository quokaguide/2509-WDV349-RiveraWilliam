import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SpringCard from "./components/SpringCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <main style={{ padding: 16 }}>
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
      </main>
    </>
  );
}

export default App;


import BottomNav from "./components/BottomNav.jsx";
export default function App(){ return (<div style={{paddingBottom:56}}>Hello<BottomNav/></div>); }


import { useState } from "react";
import FilterModal from "./components/FilterModal.jsx";
const [open,setOpen] = useState(false);
<button onClick={()=>setOpen(true)}>Filter</button>
{open && <FilterModal onClose={()=>setOpen(false)} />}
